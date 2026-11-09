# iDopa

A HacknRoll 2025 scheduling prototype with a React interface and a standalone Python shift-assignment experiment.

The interface lets you select a weekday and display an upload-confirmation alert. `src/scheduler.py` separately searches a small example of four workers and four shifts, respecting availability and a minimum number of assignments. The browser and Python scheduler are not connected yet; the Upload button currently displays the alert.

## Run the interface

You need Node.js/npm and a modern browser.

```sh
git clone https://github.com/Neonat/iDopa.git
cd iDopa
npm ci
npm run dev
```

Open the local URL printed by Vite, normally [localhost:5173](http://localhost:5173).

## Build and preview

```sh
npm run build
npm run preview
```

The production files are written to `dist/`. Vite prints the preview URL. There is no automated test script in this prototype.

## Run the scheduling example

Python 3 and its standard library are sufficient:

```sh
python3 src/scheduler.py
```

The script prints the first valid assignment for the hard-coded example. Its exhaustive search is intended for this small demonstration.

## Source

- `src/App.tsx` and `src/components/` — weekday selection and confirmation interface.
- `src/App.css` — application styling; Bootstrap supplies shared component styles.
- `src/scheduler.py` — independent shift-scheduling example.
- `vite.config.js` — React/Vite build configuration.
