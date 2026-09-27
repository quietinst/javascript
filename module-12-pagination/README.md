# Module 12 — Pagination

🔗 [Live demo](https://quietinst.github.io/javascript/module-12-pagination/dist/)

This module wraps up the course project: refactoring the [module-11](../module-11-http-requests) image search app to async/await, and adding pagination with a "Load more" button, end-of-collection detection, and smooth scrolling.

Built with Vite. To run locally:

```bash
cp .env.example .env   # add your own Pixabay API key
npm install
npm run dev
```

To publish the live demo, run `npm run build` and commit the generated `dist` folder.

## Tasks

- Task 01 — Image Search Pagination

## Topics

- `async`/`await`, `try`/`catch`
- Pagination (`page`, `per_page` query params)
- "Load more" pattern
- `getBoundingClientRect()` / `window.scrollBy()`
- Axios, SimpleLightbox, iziToast
