# JavaScript — Learning Portfolio

A structured archive of exercises and small apps built while learning JavaScript from the ground up — fundamentals through async programming, HTTP requests, and pagination. Each module is self-contained, documented, and (from Module 07 onward) has a working live demo.

## Modules

| Module                                                          | Topic                                               | Live demo                                                                                                              |
| --------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [01 — Basics](./module-01-basics)                               | Variables, basic operators                          | _(run in Node.js)_                                                                                                     |
| [02 — Conditions & Strings](./module-02-conditions-and-strings) | Conditionals, string methods                        | _(run in Node.js)_                                                                                                     |
| [03 — Arrays](./module-03-arrays)                               | Arrays, string manipulation                         | _(run in Node.js)_                                                                                                     |
| [04 — Objects](./module-04-objects)                             | Objects, object methods                             | _(run in Node.js)_                                                                                                     |
| [05 — Array Methods](./module-05-array-methods)                 | Arrow functions, `map`/`filter`/`toSorted`/`reduce` | _(run in Node.js)_                                                                                                     |
| [06 — Classes and This](./module-06-classes-and-this)           | Classes, private fields, `this`                     | _(run in Node.js)_                                                                                                     |
| [07 — DOM and Events](./module-07-dom-events)                   | DOM traversal, event listeners, forms               | [Open ↗](https://quietinst.github.io/javascript/module-07-dom-events/index.html)                                       |
| [08 — Events and Libraries](./module-08-events-and-libraries)   | Event delegation, event bubbling, CDN libraries     | [Open ↗](https://quietinst.github.io/javascript/module-08-events-and-libraries/task-01-image-gallery-modal/index.html) |
| [09 — NPM and Modules](./module-09-npm-and-modules)             | npm, ES modules, `localStorage`, Vite               | [Open ↗](https://quietinst.github.io/javascript/module-09-npm-and-modules/dist/)                                       |
| [10 — Async JS](./module-10-async-js)                           | Promises, `setInterval`, third-party UI libraries   | [Open ↗](https://quietinst.github.io/javascript/module-10-async-js/dist/)                                              |
| [11 — HTTP Requests](./module-11-http-requests)                 | REST APIs, Axios, modular architecture              | [Open ↗](https://quietinst.github.io/javascript/module-11-http-requests/dist/)                                         |
| [12 — Pagination](./module-12-pagination)                       | `async`/`await`, pagination, infinite-scroll UX     | [Open ↗](https://quietinst.github.io/javascript/module-12-pagination/dist/)                                            |

Modules 01–06 are plain Node.js exercises — clone the repo and run e.g. `node module-01-basics/task-01-droid-order/index.js`. Modules 07 onward run in the browser; 09–12 are Vite projects (`npm install && npm run dev` inside the module folder).

## What each module builds on

- **01–04** — core syntax: variables, conditionals, loops, arrays, objects
- **05–06** — functional array methods and OOP (classes, private fields, `this`)
- **07–08** — the DOM: querying, events, event delegation, and integrating third-party UI libraries
- **09** — moving from CDN scripts to real tooling: npm packages, ES modules, a Vite build
- **10** — asynchronous JavaScript: timers and Promises
- **11–12** — talking to a real backend: Axios, REST APIs, `async`/`await`, and pagination with a polished loading/scroll experience

## Conventions

Every module folder contains its own `README.md` describing what it covers, and (from Module 07 on) a `task-NN-*/README.md` per exercise with the objective and key concepts. Vite-based modules (09–12) each have their own `package.json` — install dependencies inside the module you want to run, not at the repo root.
