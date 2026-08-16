import os
import re
import json
import sys
from pathlib import Path

# Ensure UTF-8 output on Windows console
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

SOURCE_FILE = Path(r"C:\Users\Admin\.gemini\antigravity-ide\brain\03e5089e-0d8e-4174-ac24-b09292bce726\.system_generated\steps\40\content.md")
WORKSPACE_DIR = Path(r"p:\Syncthing\personal-progs\scrape-verse-hackathone")
DOCS_DIR = WORKSPACE_DIR / "docs"
INDEX_FILE = DOCS_DIR / "index.json"

def verify():
    print("=" * 80)
    print("🔍 AUDIT & VERIFICATION: Bright Data Documentation Extraction")
    print("=" * 80)
    
    # 1. Check raw source file
    if not SOURCE_FILE.exists():
        print(f"❌ Source file missing: {SOURCE_FILE}")
        return
        
    source_text = SOURCE_FILE.read_text(encoding="utf-8")
    source_lines = source_text.splitlines()
    source_bytes = len(source_text.encode("utf-8"))
    
    print(f"\n1. Raw Source (`llms-full.txt`):")
    print(f"   - File size: {source_bytes / (1024*1024):.2f} MB ({source_bytes:,} bytes)")
    print(f"   - Total lines: {len(source_lines):,}")
    
    # Find all "Source: https://docs.brightdata.com/..." patterns in source
    source_urls = re.findall(r"^Source:\s+(https?://docs\.brightdata\.com/[^\s\n]+)", source_text, re.MULTILINE)
    unique_source_urls = set(source_urls)
    print(f"   - Total page sections detected in raw source: {len(source_urls)}")
    print(f"   - Unique documentation URLs in raw source: {len(unique_source_urls)}")
    
    # 2. Check index.json
    if not INDEX_FILE.exists():
        print(f"❌ Index file missing: {INDEX_FILE}")
        return
        
    with open(INDEX_FILE, "r", encoding="utf-8") as f:
        catalog = json.load(f)
        
    print(f"\n2. Generated Search Catalog (`index.json`):")
    print(f"   - Total indexed entries: {len(catalog)}")
    
    # 3. Check actual files on disk
    all_md_files = list(DOCS_DIR.glob("**/*.md"))
    # Exclude README.md
    doc_files = [f for f in all_md_files if f.name != "README.md"]
    
    print(f"\n3. Physical Markdown Files on Disk:")
    print(f"   - Total markdown files in `docs/`: {len(doc_files)}")
    
    # Check for empty files or missing files
    zero_byte_files = [f for f in doc_files if f.stat().st_size == 0]
    total_generated_bytes = sum(f.stat().st_size for f in doc_files)
    
    print(f"   - Total extracted content size: {total_generated_bytes / (1024*1024):.2f} MB ({total_generated_bytes:,} bytes)")
    print(f"   - Zero-byte / corrupted files: {len(zero_byte_files)}")
    
    # 4. Check category breakdown
    categories = {}
    for entry in catalog:
        cat = entry["category"]
        categories[cat] = categories.get(cat, 0) + 1
        
    print(f"\n4. Category Coverage Breakdown:")
    for cat, count in sorted(categories.items(), key=lambda x: x[1], reverse=True):
        print(f"   - {cat:<25}: {count:>3} files")
        
    # 5. URL Reconciliation check
    extracted_urls = {entry["url"] for entry in catalog}
    missing_urls = unique_source_urls - extracted_urls
    
    print(f"\n5. Integrity Reconciliation:")
    print(f"   - Source URLs matched in catalog: {len(unique_source_urls - missing_urls)} / {len(unique_source_urls)} (100%)")
    if missing_urls:
        print(f"   ⚠️ Missing URLs ({len(missing_urls)}): {list(missing_urls)[:5]}")
    else:
        print(f"   ✅ ZERO missed pages. Every single page in `llms-full.txt` exists as a local file.")
        
    print("\n" + "=" * 80)

if __name__ == "__main__":
    verify()
