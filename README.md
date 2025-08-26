# Shaista Shabbir — Portfolio

A lightweight, data-driven personal site for **AI/ML Engineer** Shaista Shabbir.  
Built for GitHub Pages; no build step required.

## ✨ Features
- Clean sections: Home, Projects, Publications, Experience, Certificates, CV
- Data-driven content from `/data/*.json`
- Filterable certificates gallery with verify + PDF links
- Accessible, responsive UI with dark-mode support
- SEO metadata + JSON-LD, `sitemap.xml`, and `robots.txt`
- GitHub Actions link checker

## 📁 Structure
```
.
├── index.html
├── projects.html
├── publications.html
├── experience.html
├── certificates/
│   └── index.html
├── cv/
│   └── index.html
├── assets/
│   ├── img/               # images (avatar + certificates)
│   └── pdfs/              # PDFs (CV, certificates bundle)
├── data/                  # content sources
│   ├── projects.json
│   ├── publications.json
│   ├── experience.json
│   └── certificates.json
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
└── .github/workflows/
    └── linkcheck.yml
```

## 🚀 Deploy
1. Push the contents of this folder to the `ShaistaShabbir-prog.github.io` repository root.
2. Ensure GitHub Pages is enabled for the repo (Settings → Pages → Source: `Deploy from a branch`).
3. Visit **https://shaistashabbir-prog.github.io**.

## 🛠 Update content
- Edit JSON files in `/data/` (no HTML changes needed).
- Add new certificate images to `/assets/img/` and update `/data/certificates.json`.
- Place PDFs (transcripts, CV, certificates) in `/assets/pdfs/` and reference them in JSON.

## ✅ CI (Link Checker)
A GitHub Action checks external links on every push. See `.github/workflows/linkcheck.yml`.

## 🔒 Privacy
Only upload documents you're comfortable sharing publicly. Remove sensitive details before publishing.
