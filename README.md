# TestApp

React Native app showcasing a simple sports picks UI.

## What’s inside

- **Home tab**: horizontal “Team” cards + vertical “Player” cards
- **Leagues tab**: a multi-select dropdown with custom chevron icons
- **Design tokens**: shared colors/spacing/typography in `src/tokens/`

## Demo

Walkthrough / QA recording — inline player (works in many local Markdown previews, e.g. VS Code / Cursor):

<video controls playsinline width="100%" style="max-width: 720px;">
  <source src="demo/test.mp4" type="video/mp4" />
</video>

On **github.com**, README rendering often does not load relative video URLs; use the file link instead: [`demo/test.mp4`](demo/test.mp4) (clone the repo or open **Raw** from the file view if needed).

## Prerequisites

- **Node.js**: `>= 22.11.0` (see `package.json` -> `engines.node`)
- **React Native environment**:
  - Android: Android Studio + SDKs and an emulator/device
  - iOS: Xcode (macOS only)

## Run

Install:

```sh
npm install
```

Start Metro:

```sh
npm start
```

Android:

```sh
npm run android
```

iOS (macOS only):

```sh
bundle install
cd ios && bundle exec pod install && cd ..
npm run ios
```

## Quality checks

```sh
npm test
npm run lint
```

## Decisions

- **Navigation**: bottom tabs via React Navigation to keep the sample app structure obvious and close to common production patterns.
- **Styling**: centralized tokens in `src/tokens/` to make spacing/type/color consistent and easy to tweak.
- **UI components**: kept components lightweight and screen-focused (this is intentionally “UI-first” with no backend/data layer).

## With more time

- **Accessibility polish**: audit touch targets, add better screen reader labels, and verify contrast.
- **Component hardening**: add loading/empty/error states, skeletons, and stronger prop typing for reusable cards/dropdown.
- **Testing**: add more unit tests around the dropdown behavior and basic screen rendering.
- **Theming**: support dark mode and/or dynamic themes driven by the token system.
