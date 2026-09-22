# Task 01 — Countdown Timer

## Objective

Build a countdown timer to a user-chosen date: pick the date with flatpickr, validate it's in the future, then count down every second to days/hours/minutes/seconds, showing warnings with iziToast.

### Concepts

- flatpickr (date picker, `onClose` callback)
- `setInterval()`
- Date arithmetic (`convertMs()`)
- `padStart()` for leading zeros
- Disabling/enabling form controls
- iziToast notifications
