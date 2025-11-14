# Staff Guide

[![Deploy GitHub Pages](https://github.com/scions-of-silverymoon/staff-guide/actions/workflows/pages.yml/badge.svg)](https://github.com/scions-of-silverymoon/staff-guide/actions/workflows/pages.yml)

This repository contains the staff rule guide for the Scions of Silverymoon Discord D&D server. The guide is built using Jekyll and deployed to GitHub Pages.

## 📚 View the Guide

The published guide is available at: https://scions-of-silverymoon.github.io/staff-guide/

## 🏗️ Infrastructure

This repository is set up with:

- **Jekyll** for static site generation
- **GitHub Pages** for hosting
- **GitHub Actions** for automatic deployment
- **Jekyll Theme Cayman** for styling

## 📝 Adding Content

Content is stored in the `_guides/` directory. See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on adding and editing content.

### Quick Start

1. Create a new `.md` file in the `_guides/` directory
2. Add front matter at the top:
   ```yaml
   ---
   title: Your Page Title
   description: Brief description
   order: 1
   ---
   ```
3. Write your content in Markdown below the front matter
4. Commit and push your changes
5. The site will automatically rebuild and deploy

## 🧪 Testing Locally

To test the site locally before publishing:

```bash
# Install Ruby and Bundler (if not already installed)
# See https://jekyllrb.com/docs/installation/

# Install dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# View at http://localhost:4000/staff-guide/
```

## 🔧 Configuration

The site configuration is in `_config.yml`. Key settings include:

- `title`: Site title
- `description`: Site description
- `baseurl`: Repository name (for GitHub Pages)
- `theme`: Jekyll theme

## 📁 Repository Structure

```
staff-guide/
├── _config.yml           # Jekyll configuration
├── _guides/              # Guide content (Markdown files)
├── index.md              # Homepage
├── .github/
│   └── workflows/
│       └── pages.yml     # GitHub Actions workflow
├── CONTRIBUTING.md       # Contribution guidelines
├── LICENSE               # MIT License
└── README.md             # This file
```

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our content guidelines and the process for submitting changes.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎲 About Scions of Silverymoon

This guide supports the staff of our Discord D&D server community.