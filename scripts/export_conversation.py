#!/usr/bin/env python3
"""
Export Antigravity Conversation Script (Linux)
Packages the complete conversation, transcripts, and generated artifacts
into a zip file ready for transfer to your Windows laptop.
"""

import os
import shutil
import zipfile
from pathlib import Path

CONVERSATION_ID = "22937e55-47e9-4734-a923-a46feed116aa"
HOME_DIR = Path.home()
BRAIN_DIR = HOME_DIR / ".gemini" / "antigravity-ide" / "brain" / CONVERSATION_ID
OUTPUT_ZIP = Path(__file__).resolve().parent.parent / f"antigravity_conversation_{CONVERSATION_ID}.zip"

def export_conversation():
    if not BRAIN_DIR.exists():
        print(f"[-] Error: Conversation directory not found at {BRAIN_DIR}")
        return

    print(f"[+] Found conversation directory: {BRAIN_DIR}")
    print(f"[+] Packaging files into: {OUTPUT_ZIP}")

    with zipfile.ZipFile(OUTPUT_ZIP, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(BRAIN_DIR):
            for file in files:
                file_path = Path(root) / file
                # Store relative to brain directory so root is the conversation ID
                arcname = Path(CONVERSATION_ID) / file_path.relative_to(BRAIN_DIR)
                zipf.write(file_path, arcname)
                print(f"  -> Added: {arcname}")

    print(f"\n[✓] Successfully exported conversation to: {OUTPUT_ZIP}")
    print("[i] Copy this zip file to your Windows laptop and run the import script.")

if __name__ == "__main__":
    export_conversation()
