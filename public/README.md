## 📂 Public Folder Usage in Vite

The `public` folder in a Vite project is meant for static assets that need to be served as-is and accessible directly at the root of your website.

### ✅ What to put in `public`

- `favicon.ico` — Site icon.
- `robots.txt` — Instructions for search engines.
- `manifest.webmanifest` — For PWA support.
- `apple-touch-icon.png` — iOS home screen icon.
- `sitemap.xml` — SEO sitemap.
- `.well-known/` — Security or verification files (e.g., domain verification).
- Large static images or files to be referenced directly by URL (e.g., social preview images, big backgrounds).
- Static downloads (e.g., PDFs, static JSON files that don't require import).

### ❌ What NOT to put in `public`

- React components, TypeScript/JavaScript source files, or any code.
- CSS or images you want to import into components (these should go into `src/`).
- Assets that you want to be processed, optimized, or hashed by Vite.

### 💡 How to reference files

In your code, use absolute paths relative to the root:

```jsx
<img src="/logo.png" alt="Logo" />
