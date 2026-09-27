# Task 01 — Image Search Pagination

## Objective

Extend the module-11 image search app with pagination: refactor requests to async/await, fetch 15 images per page, add a "Load more" button that appends the next page, detect the end of the collection, and smooth-scroll after each new page loads.

### Concepts

- `async`/`await`, `try`/`catch`
- Pagination (`page`, `per_page`)
- Global search state (query + current page)
- Appending vs. replacing DOM content
- `getBoundingClientRect()` / `window.scrollBy()`
- iziToast
