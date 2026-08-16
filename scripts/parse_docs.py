import os
import re
import json
from pathlib import Path

SOURCE_FILE = Path(r"C:\Users\Admin\.gemini\antigravity-ide\brain\03e5089e-0d8e-4174-ac24-b09292bce726\.system_generated\steps\40\content.md")
WORKSPACE_DIR = Path(r"p:\Syncthing\personal-progs\scrape-verse-hackathone")
DOCS_DIR = WORKSPACE_DIR / "docs"

CATEGORIES = {
    "scraping-automation": [
        "scraping-automation", "web-unlocker", "scraping-browser", "browser-api", "serp-api",
        "crawl-api", "crawl", "easy-scraper", "unblocker", "serp"
    ],
    "ai-and-mcp": [
        "ai", "mcp", "mcp-server", "for-agents", "agent", "skills", "cli"
    ],
    "datasets-and-scrapers": [
        "datasets", "scrapers", "scraper-studio", "marketplace", "deep-lookup", "linkedin",
        "amazon", "instagram", "tiktok", "twitter", "facebook", "youtube", "reddit", "google"
    ],
    "proxy-networks": [
        "proxy-networks", "residential", "data-center", "datacenter", "isp", "mobile",
        "proxy-manager", "browser-extension"
    ],
    "api-reference": [
        "api-reference", "rest-api", "sdk", "authentication", "account-management-api",
        "postman-collection"
    ],
    "troubleshooting": [
        "errorcatalog", "error-catalog", "error-codes", "rate-limit", "troubleshooting",
        "usage-monitoring"
    ],
    "general": [
        "general", "account", "billing", "security", "policy", "overview"
    ]
}

def determine_category(url, title):
    url_lower = url.lower()
    title_lower = title.lower()
    
    # Priority matching
    if any(k in url_lower for k in ["mcp", "cli", "for-agents", "skills"]) or "mcp" in title_lower:
        return "ai-and-mcp"
    if any(k in url_lower for k in ["error", "errorcatalog", "rate-limit"]) or "error" in title_lower:
        return "troubleshooting"
    if any(k in url_lower for k in ["scraper", "dataset", "marketplace", "deep-lookup"]):
        return "datasets-and-scrapers"
    if any(k in url_lower for k in ["web-unlocker", "scraping-browser", "browser-api", "serp", "crawl"]):
        return "scraping-automation"
    if any(k in url_lower for k in ["proxy", "residential", "data-center", "isp", "proxy-manager"]):
        return "proxy-networks"
    if any(k in url_lower for k in ["api-reference", "rest-api", "sdk", "authentication"]):
        return "api-reference"
        
    for cat, keywords in CATEGORIES.items():
        if any(k in url_lower or k in title_lower for k in keywords):
            return cat
    return "general"

def main():
    if not SOURCE_FILE.exists():
        print(f"Error: {SOURCE_FILE} does not exist.")
        return

    print("Reading source file...")
    text = SOURCE_FILE.read_text(encoding="utf-8")
    
    # The file has sections starting with `# Title` followed by `Source: url`
    # Let's split by pattern
    pattern = re.compile(r"(^#\s+[^\n]+\nSource:\s+https?://[^\n]+)", re.MULTILINE)
    
    chunks = pattern.split(text)
    print(f"Total chunk parts found: {len(chunks)}")
    
    pages = []
    # chunks[0] is preamble. Then (header_and_source, content) pairs
    i = 1
    while i < len(chunks):
        header_src = chunks[i].strip()
        body = chunks[i+1].strip() if i+1 < len(chunks) else ""
        i += 2
        
        lines = header_src.split("\n")
        title = lines[0].lstrip("#").strip()
        source_url = ""
        for line in lines[1:]:
            if line.startswith("Source:"):
                source_url = line.replace("Source:", "").strip()
                break
                
        pages.append({
            "title": title,
            "url": source_url,
            "content": body
        })

    print(f"Parsed {len(pages)} distinct doc pages from llms-full.txt")
    
    # Deduplicate pages by URL
    unique_pages = []
    seen_urls = set()
    for page in pages:
        if page["url"] not in seen_urls:
            seen_urls.add(page["url"])
            unique_pages.append(page)
    pages = unique_pages
    print(f"Unique doc pages after URL deduplication: {len(pages)}")
    
    # Group pages into categories
    categorized = {}
    for cat in CATEGORIES.keys():
        categorized[cat] = []
        
    for page in pages:
        cat = determine_category(page["url"], page["title"])
        categorized[cat].append(page)
        
    for cat, items in categorized.items():
        print(f"Category '{cat}': {len(items)} pages")
        
    # Write modular docs
    DOCS_DIR.mkdir(parents=True, exist_ok=True)
    
    index_catalog = []
    
    for cat, items in categorized.items():
        cat_dir = DOCS_DIR / cat
        cat_dir.mkdir(parents=True, exist_ok=True)
        
        for item in items:
            # Create safe filename from URL or title
            url_path = item["url"].replace("https://docs.brightdata.com/", "").strip("/").replace(".md", "")
            if not url_path:
                url_path = re.sub(r'[^a-zA-Z0-9_\-]+', '-', item["title"].lower()).strip('-')
            else:
                url_path = re.sub(r'[^a-zA-Z0-9_\-]+', '-', url_path.lower()).strip('-')
            if not url_path:
                url_path = "index"
                
            filename = f"{url_path}.md"
            file_path = cat_dir / filename
            rel_path = f"docs/{cat}/{filename}"
            
            # Prepare clean markdown content
            md_content = f"# {item['title']}\n\n"
            md_content += f"> **Official Source**: [{item['url']}]({item['url']})\n"
            md_content += f"> **Category**: `{cat}`\n\n---\n\n"
            md_content += item["content"] + "\n"
            
            file_path.write_text(md_content, encoding="utf-8")
            
            # Extract summary/keywords
            summary_snippet = item["content"][:300].replace("\n", " ").strip()
            if len(item["content"]) > 300:
                summary_snippet += "..."
                
            index_catalog.append({
                "title": item["title"],
                "url": item["url"],
                "category": cat,
                "file": rel_path.replace("\\", "/"),
                "summary": summary_snippet,
                "content_length": len(item["content"])
            })

    # Save index.json
    index_file = DOCS_DIR / "index.json"
    index_file.write_text(json.dumps(index_catalog, indent=2), encoding="utf-8")
    print(f"Saved {len(index_catalog)} entries to {index_file}")

    # Generate master README.md
    readme_content = "# Bright Data Complete Documentation Library\n\n"
    readme_content += "Comprehensive, structured documentation library extracted directly from Bright Data's official documentation. Organized for quick offline reference by AI agents and developers.\n\n"
    readme_content += "## 📚 Table of Contents\n\n"
    
    for cat, items in categorized.items():
        cat_title = cat.replace("-", " ").title()
        readme_content += f"### 📂 [{cat_title}](./{cat}/)\n"
        readme_content += f"*Total pages: {len(items)}*\n\n"
        for item in items[:15]: # Show top 15 in readme
            url_path = item["url"].replace("https://docs.brightdata.com/", "").strip("/").replace(".md", "")
            if not url_path:
                url_path = re.sub(r'[^a-zA-Z0-9_\-]+', '-', item["title"].lower()).strip('-')
            else:
                url_path = re.sub(r'[^a-zA-Z0-9_\-]+', '-', url_path.lower()).strip('-')
            if not url_path:
                url_path = "index"
            readme_content += f"- [{item['title']}](./{cat}/{url_path}.md) — `({item['url']})`\n"
        if len(items) > 15:
            readme_content += f"- *...and {len(items) - 15} more in the `{cat}` directory (see [index.json](./index.json))*\n"
        readme_content += "\n"

    readme_file = DOCS_DIR / "README.md"
    readme_file.write_text(readme_content, encoding="utf-8")
    print(f"Generated {readme_file}")

if __name__ == "__main__":
    main()
