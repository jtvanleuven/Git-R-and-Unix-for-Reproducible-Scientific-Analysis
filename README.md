# Git, R, and Unix for Reproducible Scientific Analysis — Workshop Website

Live site: **https://jtvanleuven.github.io/Git-R-and-Unix-for-Reproducible-Scientific-Analysis/**

A six-session workshop website for the IMCI Software Carpentries: Git, R, and Unix for Reproducible Scientific Analysis course at the University of Idaho.

## Files

```
├── index.html       # Home / schedule overview
├── day1.html        # Unix basics
├── day2.html        # Files & directories
├── day3.html        # Loops & shell scripts
├── day4.html        # Git + intro to R
├── day5.html        # R data structures & dplyr
├── day6.html        # R visualization (ggplot2)
├── style.css        # All styles
├── scripts.js       # Copy-to-clipboard and mobile nav
├── .gitignore       # Excludes large data files
└── README.md        # This file
```

## How to Deploy to GitHub Pages

### First time

1. Go to [github.com](https://github.com) and create the repository **`Git-R-and-Unix-for-Reproducible-Scientific-Analysis`**
2. On your computer, open Terminal and run:

```bash
cd "/Users/jvanleuven/Documents/Claude/Projects/Intro_scientific_reproducibility_revamp"
git init
git add .
git commit -m "Initial workshop site"
git branch -M main
git remote add origin git@github.com:jtvanleuven/Git-R-and-Unix-for-Reproducible-Scientific-Analysis.git
git push -u origin main
```

3. In the GitHub repo, go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder, then click **Save**
6. Your site will be live within a minute or two

### Updating the site

After editing any HTML/CSS/JS files:

```bash
cd "/Users/jvanleuven/Documents/Claude/Projects/Intro_scientific_reproducibility_revamp"
git add .
git commit -m "Update day X content"
git push
```

GitHub Pages rebuilds automatically — changes are usually live within 30 seconds.

## Editing Content

Each day's content is self-contained in its `dayN.html` file. The structure of each page:

- **Objectives / Review section** — learning goals or recap of previous day
- **Live Demo sections** — instructor code blocks (syntax-highlighted, click-to-copy)
- **AI Activity section** — prompt boxes students can copy and paste into Claude or ChatGPT
- **Links section** — reference resources and Carpentries lesson pages

To add a new code block, copy this pattern:

```html
<div class="code-block">
  <div class="code-header"><span class="code-lang">bash</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
  <pre><code>your code here</code></pre>
</div>
```

To add a new AI prompt box:

```html
<div class="prompt-box">
  <div class="prompt-label">Try this prompt in Claude or ChatGPT</div>
  <button class="prompt-copy" onclick="copyPrompt(this)">Copy prompt</button>
  <div class="prompt-text">Your prompt text here</div>
</div>
```
