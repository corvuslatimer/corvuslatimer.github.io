#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
WRITING_DIR = ROOT / "writing"


def extract_block(text: str, pattern: str, name: str) -> str:
    m = re.search(pattern, text, re.S)
    if not m:
        raise RuntimeError(f"Could not find {name} block")
    return m.group(0)


def replace_block(text: str, pattern: str, repl: str, name: str) -> str:
    new, n = re.subn(pattern, repl, text, count=1, flags=re.S)
    if n != 1:
        raise RuntimeError(f"Could not replace {name} block")
    return new


def main() -> None:
    index_text = INDEX.read_text()

    blog_block = extract_block(index_text, r"<nav class=\"blog-posts\">.*?</nav>", "blog-posts")
    links_block = extract_block(index_text, r"<div class=\"links\">.*?</div>", "links")

    # Writing pages are one directory deeper; convert index links to local writing links.
    writing_blog_block = blog_block.replace('href="writing/', 'href="')

    changed = 0
    for page in sorted(WRITING_DIR.glob("*.html")):
        text = page.read_text()
        updated = replace_block(text, r"<nav class=\"blog-posts\">.*?</nav>", writing_blog_block, "blog-posts")
        updated = replace_block(updated, r"<div class=\"links\">.*?</div>", links_block, "links")

        if updated != text:
            page.write_text(updated)
            changed += 1
            print(f"updated {page.relative_to(ROOT)}")

    print(f"done: {changed} file(s) updated")


if __name__ == "__main__":
    main()
