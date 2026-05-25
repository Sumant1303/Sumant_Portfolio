# Sumant Prakash Tiwari — AI/ML Engineer Portfolio

A sleek, dark-themed, production-grade personal portfolio built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies — just fast, beautiful code.

---

## 🚀 How to Run Locally

### Option 1: Just Open in Browser (Simplest)
1. Extract the zip file
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari)
3. Done! ✅

### Option 2: Use a Local Server (Recommended for development)

**Using Python (if installed):**
```bash
cd sumant-portfolio
python -m http.server 3000
```
Then open: http://localhost:3000

**Using Node.js (if installed):**
```bash
npx serve .
```
Then open the URL shown in terminal.

**Using VS Code:**
- Install the "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

---

## 📁 Folder Structure

```
sumant-portfolio/
│
├── index.html          ← Main HTML file (everything is here)
├── css/
│   └── style.css       ← All styling, animations, responsive design
├── js/
│   └── main.js         ← Cursor, typewriter, scroll animations, etc.
└── README.md           ← You are here
```

---

## 🌐 How to Deploy Online (Free)

### Deploy on Vercel (Recommended — same as your current site)
1. Go to https://vercel.com and sign in with GitHub
2. Push this folder to a GitHub repository
3. Import the repo in Vercel → click Deploy
4. Your site is live in ~30 seconds!

### Deploy on GitHub Pages (Also Free)
1. Create a new GitHub repo named `username.github.io` or any name
2. Upload all files
3. Go to repo Settings → Pages → Source: main branch
4. Your site is live at `https://yourusername.github.io/repo-name/`

### Deploy on Netlify
1. Go to https://netlify.com
2. Drag & drop your `sumant-portfolio` folder into the deploy box
3. Done — instant live URL!

---

## ✏️ How to Update Your Info

### Add a New Project
In `index.html`, find the `<!-- PROJECTS -->` section and copy an existing `.project-card` div. Update:
- `<h3>` — Project name
- `<p>` — Description
- `href` in `.project-link` — GitHub link
- `.project-tags span` — Tech stack tags
- `.project-highlights li` — Key achievements

### Update GitHub / LinkedIn Links
Search for `Sumant1303` (GitHub) and `sumant-prakash-tiwari-76ba7b301` (LinkedIn) in `index.html` and replace with your updated links if they change.

### Add Profile Photo
In `index.html`, inside `.hero-visual`, add before `.terminal-card`:
```html
<img src="assets/photo.jpg" alt="Sumant" style="width:100px;height:100px;border-radius:50%;border:2px solid var(--accent);margin-bottom:1rem;">
```
Put your photo at `assets/photo.jpg`.

---

## 🎨 Customize Colors

In `css/style.css`, edit the `:root` variables at the top:
```css
:root {
  --accent: #00d4ff;    /* Main accent color (cyan) */
  --accent2: #7c3aed;   /* Secondary accent (purple) */
  --accent3: #10b981;   /* Green for "available" badge */
  --bg: #040812;        /* Page background */
}
```

---

Built with ❤️ by Sumant Prakash Tiwari
sumant.etw@gmail.com | github.com/Sumant1303
