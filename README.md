<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Eden Media Group

A creative ecosystem for brands that inspire, challenge, and connect. Rooted in intentional storytelling and timeless values.

## 🚀 Quick Start

This is a **fully static HTML site** optimized for GitHub Pages deployment.

### Run Locally

```bash
# Install dependencies (http-server for local development)
npm install -g http-server

# Start local development server
npm run dev
```

The site will open at `http://localhost:3000`

### GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** (or your preferred branch)
   - Folder: **/ (root)**
4. Click **Save**

Your site will be available at: `https://<username>.github.io/<repository-name>/`

##  Structure

```
eden-media-group/
├── index.html              # Home page
├── about.html              # About page  
├── brands.html             # Brands directory
├── brand-motor-toad.html   # Motor Toad brand detail
├── brand-peachy-charms.html # Peachy Charms brand detail
├── brand-spreading-truth.html # Spreading Truth brand detail
├── philosophy.html         # Philosophy page
├── contact.html            # Contact page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   ├── data.js            # Shared data constants
│   └── navigation.js      # Navigation functionality
└── .nojekyll              # Tells GitHub Pages not to use Jekyll
```

## 🎨 Customization

All brand data is defined in `js/data.js`. Edit the `BRANDS` array to update brand information across the site.

## 📄 License

All Rights Reserved © 2026 Eden Media Group
