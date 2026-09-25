# Aashish-Style Portfolio Redesign

This document is an implementation specification for evolving the current portfolio into an experience inspired by [aashishthakuri.com](https://www.aashishthakuri.com/), without copying its personal artwork, text, branding, or project content.

Research date: **2026-09-24**

## 1. What the reference site is actually doing

The reference is an editorial, interactive portfolio rather than a normal dashboard or card grid. The browser-accessible page exposes these major experiences:

1. **Interactive hero**
   - The headline is “Ideas Into Systems”.
   - Large typography is treated as part of the composition.
   - Paper-cutout objects are individually interactive: acoustic guitar, keyboard, headphones, sampler, and watch.
   - There is a prominent contact CTA and an anchor link to the about section.
2. **About / story section**
   - An astronaut illustration introduces the person.
   - The copy is short, opinionated, and editorial.
   - Experience and skills are shown as evidence, not as a large technology table.
   - Personal images are displayed as captioned snapshots.
3. **Moving capability marquee**
   - “DESIGN / DATA / AI / AUTOMATION / CREATIVE TECHNOLOGY” repeats horizontally.
4. **Skills in Orbit**
   - Skills are distributed around a central visual/particle globe.
   - The same system combines a capability statement, skill labels, and proof/qualification content.
5. **Projects as reveal panels**
   - Project entries are numbered and categorized.
   - A project initially shows an ASCII/image preview and “TAP TO REVEAL”.
   - Selecting a project reveals more information or opens the case study.
6. **Generated animated SVG portrait**
   - The public repository [AashishThakuri/AashishThakuri](https://github.com/AashishThakuri/AashishThakuri) contains `ascii_portrait.py`, `skill-icons.json`, and a large `ascii-terminal-profile-smooth.svg`.
   - This confirms that the portrait is generated artwork, not simply a CSS text effect. The generator uses image processing and emits an animated SVG.

### Important boundary

Use the **interaction model and visual language** as inspiration. Do not copy the reference person's portrait, photos, exact copy, project names, SVG, or brand identity. Create original artwork and write original content for Harsh.

## 2. Current project baseline

The repository is already a good starting point:

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4
- `framer-motion` 12 and `motion`
- Lucide icons
- Existing splash loader with a canvas matrix effect
- Existing sections: navigation, hero, about, skills, projects, resume, contact, footer
- Existing command palette and AI assistant
- Existing assets under `public/`

Relevant files:

- `src/App.tsx`: page composition and splash transition
- `src/components/PortfolioSplash.tsx`: current boot sequence, canvas background, reduced-motion handling
- `src/components/HeroSection.tsx`: current two-column hero
- `src/components/Navigation.tsx`: sticky navigation and active section tracking
- `src/components/ProjectsSection.tsx`: project presentation to be changed into reveal panels
- `src/components/SkillsSection.tsx`: candidate location for the orbit system
- `src/styles/globals.css` and `src/index.css`: global theme and motion styles
- `src/config/site.ts`: content/configuration source
- `src/lib/animations.ts`: existing animation helpers

The redesign should reuse the existing motion dependency and the current content/data pattern instead of introducing a second animation framework.

## 3. Recommended technology architecture

### Keep

```text
React + TypeScript
Vite
Tailwind CSS
Motion for React (existing framer-motion package is acceptable)
Lucide React
```

### Add only where needed

```text
@fontsource-variable/space-grotesk   # optional display typeface
@fontsource-variable/ibm-plex-mono   # optional technical labels
```

Do not add Three.js for the first version. The orbit effect can be implemented with CSS transforms and Motion, which keeps the bundle and debugging cost low. Add WebGL only if the CSS/canvas version cannot achieve the desired visual result.

### Animation responsibilities

| Effect | Preferred implementation |
|---|---|
| Section reveal | Motion `whileInView`, `useInView` |
| Scroll-linked parallax | Motion `useScroll` + `useTransform` |
| Smooth spring movement | Motion `useSpring` |
| Infinite marquee | CSS keyframes |
| Orbiting skills | CSS custom properties + Motion or CSS keyframes |
| Grain/noise | Small CSS overlay or optimized SVG data texture |
| ASCII portrait | Original generated SVG or canvas |
| Pointer tilt | Motion values; disable on touch/reduced motion |
| Project reveal | React state + Motion `AnimatePresence` |
| Route/page transitions | Motion layout/opacity, not a blocking loader |

Motion's official scroll guidance distinguishes scroll-triggered animation from scroll-linked animation and documents `useScroll`, `useTransform`, and `useSpring`: [motion.dev scroll animations](https://motion.dev/docs/react-scroll-animations).

## 4. Target visual direction

### Palette

Replace the current neon purple dashboard look with an editorial paper palette:

```css
:root {
  --paper: #eee9df;
  --paper-dark: #d8d1c5;
  --ink: #171717;
  --muted-ink: #6e6a63;
  --accent: #e34d2f;
  --line: rgba(23, 23, 23, 0.18);
  --wash: #c9d8d3;
}
```

Use near-black ink, off-white surfaces, thin rules, red/orange accent marks, and occasional pale blue/green washes. Avoid gradients and glowing purple cards except in legacy content that has not yet been migrated.

### Typography

- Display: a bold grotesk or expressive serif, with `clamp()` sizing.
- Body: readable sans-serif.
- Labels: monospace, uppercase, letter-spaced.
- Use short lines and deliberate line breaks for the hero.
- Use `font-size: clamp(3.5rem, 12vw, 12rem)` for the primary statement, then tune by viewport.

### Layout

- Full-width sections with generous vertical whitespace.
- A 12-column desktop grid, collapsing to one column on mobile.
- Thin horizontal rules and small section indices (`01 / ABOUT`, `02 / CAPABILITIES`).
- Avoid every section looking like a rounded card.
- Use `overflow: clip` for decorative overflow without creating accidental scrollbars.

## 5. Proposed information architecture

```text
App
├── SiteShell
│   ├── MinimalHeader
│   └── AccessibilityControls
├── EditorialHero
│   ├── HeroStatement
│   ├── FloatingPaperObject[]
│   ├── StatusMark
│   └── ContactCTA
├── AboutStory
│   ├── Portrait/illustration
│   ├── Short biography
│   ├── ExperienceTimeline
│   └── PersonalSnapshot[]
├── CapabilityMarquee
├── SkillsOrbit
│   ├── OrbitCore
│   ├── OrbitRing[]
│   └── SkillBadge[]
├── ProofSection
├── ProjectsReveal
│   └── ProjectRevealCard[]
├── ContactStatement
└── Footer
```

Recommended new components:

```text
src/components/editorial/EditorialHero.tsx
src/components/editorial/FloatingPaperObject.tsx
src/components/editorial/AboutStory.tsx
src/components/editorial/CapabilityMarquee.tsx
src/components/editorial/SkillsOrbit.tsx
src/components/editorial/ProjectRevealCard.tsx
src/components/editorial/ProjectsReveal.tsx
src/components/editorial/AsciiPortrait.tsx
src/components/editorial/SectionIndex.tsx
src/components/editorial/RevealOnView.tsx
src/data/portfolio.ts
src/data/projects.ts
```

Keep old sections until the new section is validated. Replace them in `App.tsx` only after the corresponding new component works on desktop, mobile, keyboard, and reduced motion.

## 6. Animation specification

### 6.1 Hero entrance

Sequence:

1. Paper background appears immediately.
2. Small status label fades in.
3. Hero words reveal from a clipped mask, line by line.
4. Decorative objects slide/rotate into place with slightly different delays.
5. CTA becomes available without waiting for a long loader.

Implementation:

```tsx
const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
```

Keep the total entrance under 1.5 seconds. The current matrix boot screen is visually unrelated to the target and should become optional or be replaced with a short editorial reveal.

### 6.2 Paper objects

Each object should have:

- A semantic `button` wrapper if interactive.
- A unique `aria-label`.
- A static transform on load.
- Pointer movement limited to a small range, such as `translate3d(-12px, 8px, 0) rotate(-3deg)`.
- A hover/focus lift and shadow.
- A touch fallback that does not require a pointer.

Use `useMotionValue`, `useSpring`, and `useReducedMotion`. Animate `transform` and `opacity`, not `top`, `left`, `width`, or `height`.

### 6.3 Scroll-linked composition

Use a shared hook:

```tsx
const { scrollYProgress } = useScroll();
const heroY = useTransform(scrollYProgress, [0, 0.35], ["0%", "-18%"]);
const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
```

Apply scroll-linked movement only to decorative layers. Keep the main text readable and avoid moving every element simultaneously.

CSS scroll-driven animations are a useful progressive enhancement for simple effects; see [MDN scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations). Motion remains the primary implementation because the project already uses it and it provides a JavaScript fallback.

### 6.4 Marquee

Render two copies of the same items and animate the track from `translateX(0)` to `translateX(-50%)`. This prevents a visible gap:

```css
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}

@keyframes marquee {
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation-play-state: paused; }
}
```

### 6.5 Skills orbit

Use one static center and 3–4 rings. Every ring gets a different duration and direction. Skill badges should counter-rotate so their labels remain readable:

```css
.orbit-ring {
  animation: orbit 26s linear infinite;
}

.orbit-badge {
  animation: counter-orbit 26s linear infinite;
}
```

For accessibility, the orbit must not be the only way to discover skills. Render an accessible list below or alongside it, and pause the orbit on hover/focus.

### 6.6 Project reveal

Initial state: image/ASCII preview, number, category, title, “REVEAL PROJECT”.

Expanded state:

- Image increases in size.
- Metadata slides into view.
- Description and links become visible.
- The card gets a clear close/collapse action.

Use `AnimatePresence` with a stable project ID. Do not use array indexes as React keys.

### 6.7 ASCII portrait

Generate original art from a photo or abstract image. A practical pipeline is:

1. Resize source image to a low-resolution grid.
2. Convert to grayscale and increase contrast.
3. Map luminance to a fixed character ramp.
4. Emit SVG `<text>` or `<path>` elements.
5. Apply a subtle scanline/terminal animation.
6. Optimize the SVG and serve it from `public/art/`.

For a first release, prefer pre-generating the SVG at build time rather than converting an image in the browser. This reduces CPU work and avoids exposing a heavy generator to every visitor.

## 7. Accessibility requirements

The target style is highly visual, so accessibility must be deliberate:

- Respect `prefers-reduced-motion`. MDN documents this media feature at [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).
- Add a “Skip to content” link.
- Maintain visible keyboard focus rings.
- Every decorative image gets empty alt text; every informative image gets a meaningful alt.
- Interactive objects use buttons, not clickable `div`s.
- Do not make text readable only through animation.
- Pause marquee/orbit animations on keyboard focus.
- Ensure contrast for the thin editorial text and rules.
- Use `aria-expanded` and `aria-controls` for project panels.
- Do not trap focus in the splash screen.
- Keep the contact CTA a real link (`mailto:` or a form endpoint).

The existing `PortfolioSplash` has a reduced-motion branch, but its preference state should not override a user's preference with configuration. The effective rule should be:

```ts
const shouldReduceMotion =
  prefersReducedMotion || animationConfig.reducedMotion === true;
```

## 8. Performance plan

Targets:

- First contentful hero should not wait for portfolio images.
- Do not ship a large background video for the first version.
- Use AVIF/WebP for photos and provide width-specific sources.
- Use `loading="lazy"` for below-the-fold images.
- Set `width` and `height` (or `aspect-ratio`) to prevent layout shift.
- Lazy-load project detail content if it becomes large.
- Keep animation on `transform` and `opacity`.
- Use `content-visibility: auto` cautiously for long project sections.
- Pause canvas and orbit loops when offscreen with `IntersectionObserver`.
- Test on a mid-range phone with CPU throttling.

React's official [`lazy`](https://react.dev/reference/react/lazy) and [`Suspense`](https://react.dev/reference/react/Suspense) APIs can split large sections. Use them for the project gallery or AI assistant, not for the hero.

## 9. Content model

Move content out of JSX:

```ts
export type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  image?: string;
  technologies: string[];
  url?: string;
  sourceUrl?: string;
  featured?: boolean;
};
```

Write original content in this voice:

- Specific: describe the problem and outcome.
- Short: one strong sentence before details.
- Human: explain why the project mattered.
- Evidence-based: include links, metrics, screenshots, or demos when available.

Suggested Harsh-specific sections:

1. “I build useful systems with a human interface.”
2. “Selected work” with 4–6 strongest projects.
3. “Tools I use to move from idea to shipped product.”
4. “Open for software, AI, and product engineering work.”

## 10. Implementation sequence

### Phase 1 — Foundation

- Create `src/data/portfolio.ts` and `src/data/projects.ts`.
- Add design tokens and typography.
- Add `RevealOnView` and a shared reduced-motion hook.
- Add `SectionIndex`.
- Decide which existing content is kept, rewritten, or removed.

### Phase 2 — Hero

- Replace `HeroSection` with `EditorialHero`.
- Create 4–5 original paper objects using CSS/SVG.
- Add the hero contact CTA and anchor link.
- Remove the dense engineering-focus card.
- Test keyboard and mobile interaction.

### Phase 3 — Story and marquee

- Build `AboutStory`.
- Add one original portrait/illustration and three personal/project snapshots.
- Build `CapabilityMarquee`.
- Use CSS keyframes and pause behavior.

### Phase 4 — Skills orbit

- Build orbit rings with a central statement.
- Add an accessible skill list.
- Pause on hover/focus and reduce to a static list under reduced motion.

### Phase 5 — Projects

- Convert `ProjectsSection` into `ProjectsReveal`.
- Create original preview art or project screenshots.
- Add `aria-expanded`, keyboard support, and focus management.
- Add case-study links only where real URLs exist.

### Phase 6 — Portrait and polish

- Generate an original SVG portrait.
- Optimize assets.
- Add subtle grain only if it does not harm readability.
- Replace the old purple/pink surface styles across remaining sections.

### Phase 7 — Validation

- Run `npm run build`.
- Test at 375px, 768px, 1024px, and 1440px widths.
- Test keyboard-only navigation.
- Test with reduced motion enabled.
- Test with slow network throttling.
- Check Lighthouse Performance, Accessibility, Best Practices, and SEO.
- Confirm no horizontal overflow and no layout shift in the hero.

## 11. What not to do

- Do not copy the reference site's SVG, personal photos, wording, project names, or source assets.
- Do not make every element continuously animate.
- Do not add a WebGL dependency before measuring the CSS/canvas approach.
- Do not keep the current “everything is a glowing violet card” treatment if the goal is the reference's editorial style.
- Do not hide all information behind hover; touch and keyboard users need an explicit reveal.
- Do not use a long loading screen to disguise slow assets.
- Do not remove the existing AI assistant until its role is decided; lazy-load it if it is not part of the new visual narrative.

## 12. Research links

- Reference experience: [aashishthakuri.com](https://www.aashishthakuri.com/)
- Public reference repository: [github.com/AashishThakuri/AashishThakuri](https://github.com/AashishThakuri/AashishThakuri)
- Motion scroll animations: [motion.dev/docs/react-scroll-animations](https://motion.dev/docs/react-scroll-animations)
- Motion `useScroll`: [motion.dev/docs/react-use-scroll](https://motion.dev/docs/react-use-scroll)
- React lazy loading: [react.dev/reference/react/lazy](https://react.dev/reference/react/lazy)
- React Suspense: [react.dev/reference/react/Suspense](https://react.dev/reference/react/Suspense)
- Reduced motion: [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- Scroll-driven CSS animations: [MDN scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)

## Definition of done

The redesign is ready when the page has the reference's **editorial rhythm**—large typographic hero, tactile objects, story-led about section, moving capability band, orbiting skills, and reveal-based projects—while remaining original, responsive, keyboard accessible, reduced-motion friendly, and fast on mobile.
