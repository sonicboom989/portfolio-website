

# **Portfolio Website – Luke Coffman**

A personal portfolio built with **React + Vite** to showcase software projects. The design focuses on clarity, performance, and intentional layout

This repo serves both as a live personal portfolio and as a demonstration of component structure, styling discipline, and frontend architecture.

---

## 🚀 **Features**

* Custom React architecture
* Responsive layout for desktop + mobile
* Inline SVG social icons (no dependencies)
* Hover animations:

  * LinkedIn / GitHub: text slide-out reveal
  * Email: envelope-open animation (no slide)


  * **IBM Plex Sans** (primary UI / structure)
  * **JetBrains Mono** (technical / terminal accents)
* Modular project system → add projects via one object in an array

---

## 🛠️ **Tech Stack**

| Category   | Tools                                  |
| ---------- | -------------------------------------- |
| Framework  | React (Vite)                           |
| Styling    | Custom CSS (no Tailwind, no Bootstrap) |
| Fonts      | IBM Plex Sans, JetBrains Mono          |
| Build Tool | Vite                                   |
| Icons      | Custom inline SVG                      |

---

## 📂 **Project Structure**

```
src/
│
├── assets/               # images, headshot, project thumbnails
│   └── projects/         # per-project images
│
├── App.jsx               # hero, projects, interactive icons
├── App.css               # full layout + component styling
├── main.jsx              # React root
└── index.css             # global styling + resets
```

---

## 🧩 **Add a New Project**

Add a new entry to the `projects` array in `App.jsx`:

```js
projects.push({
  title: "Project Name",
  blurb: "Short, clear description of the project’s purpose and result.",
  tech: ["React", "FastAPI", "Python"],
  links: [
    { label: "GitHub", href: "https://github.com/..." },
    { label: "Demo", href: "https://..." }
  ],
  photo: projectImageImport // optional
});
```

No JSX changes needed — the UI updates automatically.

---

## 📦 **Local Development**

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build
```

---

## 🌐 **Live Site**

> https://YOUR_DOMAIN_HERE.tch
> (Replace this after deployment)

---

## 📩 **Contact**

**Luke Coffman**
Email: [lrcoffman@ku.edu](mailto:lrcoffman@ku.edu)
LinkedIn: [https://linkedin.com/in/luke-coffman06](https://linkedin.com/in/luke-coffman06)
GitHub: [https://github.com/sonicboom989](https://github.com/sonicboom989)

If you're a recruiter or engineer reviewing this, thank you for taking the time.

---

## ⭐️ **Support**

If you find this project helpful or well-structured, consider giving the repo a star.
It helps visibility and signals interest to recruiters.
