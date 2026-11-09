# iDopa — shift-scheduling prototype

A **HacknRoll 2025** prototype exploring worker availability and shift assignment. It contains a React weekday-selection interface and an independent Python scheduling experiment.

## What is built

The browser interface lets you select a day of the week and press **Upload** to display a confirmation alert. It does not upload availability data or request a generated schedule.

Separately, [`src/scheduler.py`](src/scheduler.py) searches a hard-coded example of four workers and four shifts. It checks worker availability, assigns exactly one worker to each shift and requires at least one assignment per worker, then prints the first valid schedule.

The React interface and Python solver are not connected. The repository records these two prototype pieces, rather than an operational scheduling service.

## Run the interface

You need Node.js/npm and a modern browser.

```sh
git clone https://github.com/Neonat/idopa-shift-scheduler-2025.git
cd idopa-shift-scheduler-2025
npm ci
npm run dev
```

Open the local URL printed by Vite, normally [localhost:5173](http://localhost:5173).

## Run the scheduling example

Python 3 and its standard library are sufficient:

```sh
python3 src/scheduler.py
```

The exhaustive search is intended for this small demonstration; the script does not read browser selections or an uploaded file.

## Build and preview

```sh
npm run build
npm run preview
```

The production files are written to `dist/`. Vite prints the preview URL. There is no automated test script in this prototype.

## Source guide

| Location | Purpose |
| --- | --- |
| [`src/App.tsx`](src/App.tsx) and [`src/components/`](src/components/) | Day selection and confirmation interface. |
| [`src/App.css`](src/App.css) | Application styling; Bootstrap supplies shared component styles. |
| [`src/scheduler.py`](src/scheduler.py) | Standalone shift-assignment example. |
| [`vite.config.js`](vite.config.js) | React/Vite build configuration. |
