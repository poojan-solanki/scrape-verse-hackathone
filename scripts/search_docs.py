import sys
import json
from pathlib import Path

# Ensure UTF-8 output on Windows console
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

WORKSPACE_DIR = Path(__file__).parent.parent
DOCS_DIR = WORKSPACE_DIR / "docs"
INDEX_FILE = DOCS_DIR / "index.json"

def search_docs(query, category=None, max_results=10):
    if not INDEX_FILE.exists():
        print(f"Error: Index file {INDEX_FILE} not found. Run parse_docs.py first.")
        return
        
    with open(INDEX_FILE, "r", encoding="utf-8") as f:
        catalog = json.load(f)
        
    query_lower = query.lower()
    results = []
    
    for entry in catalog:
        if category and entry["category"] != category:
            continue
            
        score = 0
        title_lower = entry["title"].lower()
        summary_lower = entry["summary"].lower()
        url_lower = entry["url"].lower()
        
        if query_lower in title_lower:
            score += 10
        if query_lower in url_lower:
            score += 5
        if query_lower in summary_lower:
            score += 3
            
        # Match individual keywords
        keywords = query_lower.split()
        for kw in keywords:
            if kw in title_lower:
                score += 2
            if kw in summary_lower:
                score += 1
                
        if score > 0:
            results.append((score, entry))
            
    results.sort(key=lambda x: x[0], reverse=True)
    
    print(f"\n🔍 Search Results for: '{query}' ({len(results)} found, displaying top {min(len(results), max_results)})\n" + "="*80)
    
    for idx, (score, item) in enumerate(results[:max_results], 1):
        file_path = WORKSPACE_DIR / item["file"]
        print(f"\n{idx}. 📄 {item['title']} (Score: {score})")
        print(f"   📂 Category : {item['category']}")
        print(f"   🔗 Source   : {item['url']}")
        print(f"   📁 Local Doc: {file_path}")
        print(f"   📝 Summary  : {item['summary'][:160]}...")
    print("\n" + "="*80)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python search_docs.py <query> [optional_category]")
        print("Example: python search_docs.py 'mcp tools' ai-and-mcp")
    else:
        q = sys.argv[1]
        cat = sys.argv[2] if len(sys.argv) > 2 else None
        search_docs(q, cat)
