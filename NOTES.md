# Git, R, and Unix for Reproducible Scientific Analysis — Project Notes

*For Claude: read this before starting any work on this project. It captures all decisions made and the current state so you can pick up without re-deriving context.*

---

## What This Project Is

A redesigned version of the **Software Carpentries: Git, R, and Unix for Reproducible Scientific Analysis** workshop taught by James Van Leuven at the University of Idaho IMCI. The workshop runs 6 sessions (Tue/Thu, 3:00–5:30 PST, IRIC 352 / Zoom) covering Unix shell, loops, shell scripting, Git, and R — with AI integrated as a coding collaborator.

This is one of four workshops James regularly teaches and revamps. The two completed ones are the **DataViz revamp** (`/Users/jvanleuven/Documents/Claude/Projects/DataViz revamp/`) and the **Genomics revamp** (`/Users/jvanleuven/Documents/Claude/Projects/Genomics revamp/`). The DataViz project is the reference for formatting and design.

---

## Current State (as of June 2026)

### What exists
The project folder (`/Users/jvanleuven/Documents/Claude/Projects/Intro_scientific_reproducibility_revamp/`) contains:

- **Workshop site files at root level** (served by GitHub Pages):
  - `index.html`, `day1.html`–`day6.html`, `style.css`, `scripts.js`
- **`2025-10-14_introUnix_R_git/`** — original workshop files from the Oct 2025 run: run of show (.gdoc + .md), slides (.gslides), cheat sheet (.docx), gapminder data (.xlsx)
- **`.gitignore`** — excludes large data files, .DS_Store, R outputs, shell-lesson-data
- **`NOTES.md`** — this file

### GitHub repo
- **Repo:** `git@github.com:jtvanleuven/Git-R-and-Unix-for-Reproducible-Scientific-Analysis.git`
- **Live site:** `https://jtvanleuven.github.io/Git-R-and-Unix-for-Reproducible-Scientific-Analysis/`
- Branch: `main`, source: root `/`

*(Note: As of initial build, the repo may not yet be pushed. James needs to: `git init`, `git add -A`, `git commit -m "initial build"`, `git remote add origin git@github.com:jtvanleuven/Git-R-and-Unix-for-Reproducible-Scientific-Analysis.git`, `git push -u origin main`)*

---

## Site Structure

The site matches the DataViz and Genomics workshop format exactly: fixed left sidebar nav, dark blue header with teal accent, `.code-block` with language labels and copy buttons, `.prompt-box` for AI prompts (green), `.callout` boxes for tips/warnings/demos. CSS and JS were copied directly from the DataViz project's `workshop-site/` folder.

**Sidebar nav labels:**
- Day 1 — Unix Basics (Tue Oct 14)
- Day 2 — Files & Directories (Thu Oct 16)
- Day 3 — Loops & Scripts (Tue Oct 21)
- Day 4 — Git + Intro to R (Thu Oct 23)
- Day 5 — R Data Structures (Tue Oct 28)
- Day 6 — R Visualization (Thu Oct 30)

---

## AI Integration Strategy

Light touch throughout, with one centerpiece moment on Day 3. The core principle: **AI for understanding and code generation; students run, read, and iterate.**

- **Day 1 (Unix Basics):** One prompt — ask AI to explain a pipeline step by step. Helps students understand `|`, `grep`, and `>` in context.
- **Day 2 (Files & Directories):** One prompt — ask AI to explain a `cut | sort | uniq -c` pipeline. Then iterate to filter results.
- **Day 3 (Loops & Scripts):** **Centerpiece** — students prompt AI to write `experiment_setup.sh` from a plain-English description, then read, understand, and run it. Reference solution shown below the prompt box.
- **Day 4 (Git + Intro to R):** Two prompts — one for interpreting Git error messages, one for explaining staging/commit with an analogy. AI is not used to write Git commands (students need to learn the workflow).
- **Day 5 (R Data Structures):** One prompt — AI writes a dplyr pipeline from a plain-English description. Students run it and follow up to add standard deviation.
- **Day 6 (R Visualization):** Heavy AI use — two prompts: one for customizing a specific ggplot (axis breaks, legend, label rotation), one as a general template for any plot customization. Matches what James already does in class ("it's faster to ask AI than to google").

---

## Workshop Content Reference

**Run of show:** `2025-10-14_introUnix_R_git/2025-10-14-RRepro_RunOfShow.md` (also .gdoc)

**Day breakdown:**
- **Day 1:** Shell prompt, ls/pwd/cd, flags, tab complete, pipes, `>`, wildcards (`*`), head/tail/less, absolute vs. relative paths
- **Day 2:** mkdir, rm -r, nano, mv, cp, echo, `>>`, `?` wildcard, wc, sort, cut, uniq, chmod, goodiff.sh intro
- **Day 3 (Lesson 1):** for loops, brace expansion `{0..9}`, loop variables, nested loops, `>>` in loops. (Lesson 2): shell scripts, shebang, chmod, `$1`/`$2`/`$3`, `$@`, comments, `sorted.sh`, `species.sh`, `experiment_setup.sh`
- **Day 4 (Git):** config, init, .git dir, add/commit/push workflow, checkout HEAD~1, gitignore, git rm --cached, git diff, git log --oneline, GitHub remote, clone, pull/push, authentication. (Intro to R): RStudio orientation, arithmetic, log(), comparisons, variables `<-`, rm(), R projects, dir.create(), download.file()
- **Day 5:** read.csv, dim/nrow, object types (int/num/chr/logi), data structures (data.frame/vector/list/factor), vectorization, system.time(), data.frame(), write.csv, type coercion, as.numeric, list `[[]]`, subsetting `[row, col]`, logical subsetting, `%in%`, tidyverse/dplyr: select/filter/rename/group_by/summarize/mutate/between
- **Day 6:** base plot/hist, dev.off, ggplot grammar (data → aes → geom), geom_point/boxplot/jitter/line, grouping by year, color (fixed vs. aesthetic), ggsci/scale_color_nejm/scale_color_manual, alpha/size/shape, scale_shape_manual/scale_size_manual, multiple geom layers, labs, theme_classic, scale_x_continuous, ggsave, facet_wrap, legend position, highlighting subsets with second geom layer, patchwork for multi-panel

**Dataset:** gapminder.csv — country-level data on life expectancy, population, GDP per capita, 1952–2007. Downloaded from `https://swcarpentry.github.io/r-novice-gapminder/data/gapminder_data.csv`

**Shell data:** shell-lesson-data.zip from `https://swcarpentry.github.io/shell-novice/data/shell-lesson-data.zip`

**R packages used:** tidyverse, ggplot2, ggsci, patchwork

---

## Decisions Made

- **Title on site:** "Git, R & Unix for Reproducible Science" (shorter than the full Carpentries title)
- **AI integration:** light touch on Unix/Git days; centerpiece on Day 3 (shell script); heavy on Days 5–6 for R/dplyr/ggplot
- **GitHub Pages:** HTML/CSS/JS at root level (not in subfolder) so Pages can serve them directly
- **No NOTES.md existed in the DataViz revamp folder** — this format was established with the Genomics revamp and is now the standard

---

## Things Still To Do

- [ ] `git init` and push the site to `git@github.com:jtvanleuven/Git-R-and-Unix-for-Reproducible-Scientific-Analysis.git` — enable GitHub Pages (Settings → Pages → Source: main / root)
- [ ] Add Zoom recording links to each day page once recordings are available (placeholders currently omitted)
- [ ] Add pre- and post-workshop survey links to `index.html` when available
- [ ] After next workshop run: update AI prompts based on what worked; note any commands that confused students

---

## Relationship to Other Workshops

The DataViz project (`/Users/jvanleuven/Documents/Claude/Projects/DataViz revamp/`) is the design template. If James wants to change the visual design of all workshops, edit `style.css` in the DataViz project first, then copy it here and to the Genomics revamp.

The Genomics revamp (`/Users/jvanleuven/Documents/Claude/Projects/Genomics revamp/`) has a more technical audience (bioinformatics pipeline) and heavier AI use on the bash days. This intro workshop has a broader audience and lighter AI integration.

James mentioned there is one more workshop to revamp after this one.
