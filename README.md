# Karuta Game (React + Vite)

This project is a browser-based karuta-style game built with React and Vite.
It focuses on fast interaction using images and audio, and is designed to be extended
into an online multiplayer game in the future.

---

## Migration Note (Summary)

- Node.js version warnings triggered a review of the build environment
- Due to maintainability issues with CRA (Create React App), the project was migrated to Vite
- The entry structure was updated to the Vite standard (`index.html` / `main.jsx`)
- An asset resolver was introduced to preserve existing image and audio data paths
- Stable behavior was confirmed across dev, build, preview, and Vercel production

---

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- ESLint / Prettier

---

## Project Structure

```
.
├── public/
│   ├── images/        # Static images (cards, flags, UI assets)
│   └── sounds/        # Audio files (effects, EN/JP voices)
│
├── src/
│   ├── components/    # React components
│   ├── hooks/         # Game logic hooks
│   ├── utils/         # Shared utilities (asset resolver, etc.)
│   ├── App.jsx
│   └── main.jsx
│
├── index.html         # Vite entry HTML
├── vite.config.js
├── package.json
└── README.md
```
## Asset Management

All images and audio files are placed under the public directory.

Assets are referenced using public-relative paths, such as:

- `images/pictures/001_p.png`
- `sounds/en/001_en.mp3`
- `sounds/effects/click.mp3`

To support future changes such as basePath, subdirectory hosting, or CDN usage,
all asset paths are resolved through a centralized resolver.

Example asset resolver:

`src/utils/assetResolver.js`

```js
export const resolveAsset = (relPath) =>
  `${import.meta.env.BASE_URL}${relPath}`;
```

This design allows asset URL behavior to be changed in one place only.

---

## Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:
http://localhost:5173

---

## Build & Preview

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

## Notes on Build Artifacts

- `dist/` (and legacy `build/`) are auto-generated
- Do not edit or commit them
- These directories are ignored via `.gitignore`

---

## Linting & Formatting

- ESLint is used for code validation
- Prettier is used for formatting
- Shared VS Code settings are provided under `.vscode/`

---

## Removed / Not Used

This project was originally bootstrapped with Create React App (CRA),
but all CRA-specific features have been removed, including:

- react-scripts
- reportWebVitals
- CRA build pipeline
- CRA-specific public asset assumptions

The project now uses Vite exclusively.

---

## Future Plans

- Migration to Next.js
- Online multiplayer support
- WebSocket-based real-time gameplay
- CDN-based asset delivery

The current architecture is designed with these extensions in mind.

---

## License

This project is for educational and experimental purposes.
