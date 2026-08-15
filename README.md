# La Octava

Landing page for La Octava — a Piano Bar on the upper floor and a House Club on
the lower floor, in Sant Cugat del Vallès (Barcelona).

Built with React + Vite, no UI framework — plain CSS with design tokens.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint
```

## Structure

```
public/icon.jpeg        the house mark — also the favicon
src/site.js             all copy: tagline, nights, address, floor descriptions
src/index.css           design tokens (palette, type, spacing) + base styles
src/App.css             layout and component styles
src/components/         Nav, Hero, Floors, Nights, Visit, Footer, Reveal
src/hooks/useReveal.js  one-shot fade-up on scroll into view
```

Editing copy — the tagline, opening nights, address, or either floor's blurb —
means editing `src/site.js` only; nothing is hardcoded in the components.

## Palette

Two hues only, both sampled directly out of `public/icon.jpeg`: the mark's
burgundy `#480713` and its cream `#dcc0aa`. The page ground is that burgundy
driven down toward black, so the room stays dark and the logo colours carry
every accent.

| Token          | Value     | Use                                       |
| -------------- | --------- | ----------------------------------------- |
| `--ink-950`    | `#050102` | hero and footer — the darkest ground      |
| `--ink-900`    | `#0a0104` | page base, Nights section                 |
| `--ink-850`    | `#0f0206` | Floors and Visit sections                 |
| `--wine`       | `#480713` | **from the logo** — glows, fills, hovers  |
| `--wine-lift`  | `#5e0a19` | rules, borders, ghost-button edges        |
| `--cream`      | `#dcc0aa` | **from the logo** — accents, buttons      |
| `--paper`      | `#f0e3d8` | headings                                  |
| `--body-text`  | cream 72% | paragraphs                                |

Type is Cormorant Garamond (display) and Jost (UI), loaded from Google Fonts in
`index.html`.

Background-video prompts for the hero live in [`VIDEO-PROMPTS.md`](./VIDEO-PROMPTS.md).
