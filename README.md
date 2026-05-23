# Chhatrapathi Sivaji Lakkimsetty Portfolio Draft

This is a self-contained static portfolio draft for:

```text
https://chhatrapathisivaji.github.io/
```

Open `index.html` directly in a browser, or preview it locally with:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:4173/
```

## Current Structure

- Hero positioning for AI/ML and full-stack roles
- Personal goal alignment
- Experience timeline
- Project library with clickable case-study routes
- Skills grouped by hiring signal
- Education and certifications
- Contact / opportunity section

## Project Routes

Project cards use hash-based routes, for example:

```text
https://chhatrapathisivaji.github.io/#project/sound-scene-synthesis
```

The current project descriptions were distilled from the provided reports. The raw PDFs were not copied
into the public site, so the site publishes the written case studies without exposing the original course
report files.

## GitHub Pages Setup

Create a GitHub repository named exactly:

```text
chhatrapathisivaji.github.io
```

Then publish these files to the repository root on the `main` branch:

```bash
git init
git add index.html styles.css script.js README.md .nojekyll
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/chhatrapathisivaji/chhatrapathisivaji.github.io.git
git push -u origin main
```

In GitHub, use `Settings -> Pages`, then select:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

## Public Information Used

- LinkedIn public profile data from the provided URL
- Public search snippets for education and project details
- Public Freelancer profile snippet for earlier AI/data/full-stack background

## Information Needed For The Next Version

- Resume PDF or DOCX
- Verified GitHub URL
- Exact Handshake title and dates
- Earlier company names, titles, and dates for Chennai/Hyderabad roles
- Email address or preferred contact method
- Project repository links, demos, screenshots, papers, or notebooks
- Target roles and personal goal priorities
