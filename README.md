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
src/site.js             all copy: tagline, nights, address, floor + visit facts
src/index.css           design tokens (palette, type, spacing) + base styles
src/App.css             layout, component styles and the motion kit
src/components/         Nav, Hero, Floors, Nights, Visit, Footer, Reveal
src/hooks/useReveal.js  one-shot "in view" flag for the reveal system
```

Editing copy — the tagline, opening nights, address, either floor's blurb, or
the three visit facts — means editing `src/site.js` only; nothing is hardcoded
in the components. Copy is deliberately terse: one line to set a room, then the
facts, and the page carries the rest.

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

## Motion

Two easing tokens (`--ease-out`, `--ease-spring`) at the top of the motion kit
in `App.css` drive everything. Blocks enter through `<Reveal>`, which picks a
direction with `variant` (`up`, `left`, `right`, `zoom`) and staggers siblings
with `delay`. The hero runs on its own timeline: `--step` queues each element,
and the title's letters carry a finer stagger on top.

Ambient loops — the hero's breathing lamp, the floating marks, the piano keys
and level meter in the floor plans, the map's pulse and light sweep — all stop
under `prefers-reduced-motion`, and the reveal system lands its blur and offset
instantly. `index.css` collapses durations globally; `App.css` handles the
looping pieces that need to be switched off outright.
