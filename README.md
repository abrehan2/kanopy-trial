<div align="center">
  <h3 align="center">Platformz Next.js Starter</h3>
  <p>Feature modules and Vitest.</p>
  <p>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Vitest-black?style=for-the-badge&logoColor=white&logo=vitest&color=729B1B" alt="Vitest" />
  </p>
</div>

## Table of contents

1. [What this is](#what-this-is)
2. [Quick start](#quick-start)
3. [Architecture](#architecture)
4. [Naming](#naming)
5. [Feature data flow](#feature-data-flow)
6. [Testing](#testing)
7. [Adding a feature](#adding-a-feature)
8. [Scripts](#scripts)
9. [Tooling](#tooling)

## What this is

A Next.js 16 App Router starter (React 19). Routes stay thin. Domain work lives in `src/features`. Shared UI lives in `src/components`. Tests sit in `tests/` and mirror `src/`.

Imports use `@/` (`src/*`). Styling is Tailwind only — no CSS modules.

## Quick start

Requires Node **20.9+** (`lts/iron` in `.nvmrc`).

```bash
git clone git@github.com:PlatformzHQ/platformz-next-template.git
cd platformz-next-template
npm install
npm run prepare
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Need | Command |
| --- | --- |
| Tests | `npm run test:run` |

## Architecture

```
app/                         Next.js routes (thin)
src/
  features/<name>/           domain
    components/              PascalCase screens
    data/                    use-*.ts, *-map.ts
  components/
    ui/                      shared primitives
    layout/                  layout shells
    feedback/                loaders, toasts
  lib/  hooks/  data/        shared helpers
tests/                       mirrors src/
```

```mermaid
%%{init: {"flowchart": {"curve": "basis", "nodeSpacing": 28, "rankSpacing": 36}}}%%
flowchart TB
  classDef route fill:#eef2ff,stroke:#6366f1,stroke-width:2px,color:#312e81
  classDef impl fill:#ccfbf1,stroke:#0d9488,stroke-width:2px,color:#134e4a
  classDef test fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
  classDef alias fill:#18181b,stroke:#18181b,color:#fafafa

  subgraph R["ROUTES  ·  app/"]
    direction LR
    L["layout.tsx"]
    P["page.tsx<br/>thin FeaturePage re-export"]
  end

  A(["@/"])

  subgraph S["IMPLEMENTATION  ·  src/"]
    direction LR
    F["features/{name}<br/>components · data"]
    C["components/<br/>ui · layout · feedback"]
  end

  subgraph T["TESTS  ·  tests/"]
    direction LR
    U["Unit<br/>*.test.ts"]
    I["Integration<br/>*.test.tsx"]
  end

  P --> A --> F
  F --> C
  F --> U
  F --> I

  class L,P route
  class F,C impl
  class U,I test
  class A alias
  style R fill:#eef2ff,stroke:#c7d2fe,color:#312e81
  style S fill:#f0fdfa,stroke:#99f6e4,color:#134e4a
  style T fill:#fffbeb,stroke:#fde68a,color:#78350f
```

Pages import from `@/features/...` and render a feature component. They do not fetch data themselves.

## Naming

| Kind | Pattern | Example |
| --- | --- | --- |
| React components | PascalCase, named export | `Loader.tsx` → `export function Loader` |
| Feature screens | PascalCase `*Page.tsx` | `CommandCenterPage.tsx` |
| Hooks / mappers / lib | kebab-case | `use-hello.ts`, `hello-map.ts` |
| Tests | same path under `tests/` | `tests/features/example/hello-map.test.ts` |
| Imports | `@/` only | `import { Loader } from '@/components/feedback/Loader'` |

## Feature data flow

```mermaid
%%{init: {"flowchart": {"curve": "basis", "nodeSpacing": 18, "rankSpacing": 24}}}%%
flowchart LR
  classDef s1 fill:#eef2ff,stroke:#6366f1,stroke-width:2px,color:#312e81
  classDef s2 fill:#ccfbf1,stroke:#0d9488,stroke-width:2px,color:#134e4a
  classDef s3 fill:#99f6e4,stroke:#0f766e,stroke-width:2px,color:#134e4a
  classDef s4 fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
  classDef s5 fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#5b21b6

  HK(["1  Hook<br/>use-*.ts"])
  MP(["2  Mapper<br/>*-map.ts"])
  UI(["3  UI<br/>FeaturePage"])
  RT(["4  Route<br/>app/.../page"])

  HK --> MP --> UI --> RT

  class HK s1
  class MP s2
  class UI s4
  class RT s5
```

1. Fetch or compose data in `data/use-*.ts`.
2. Map the payload to a view model in `data/*-map.ts`.
3. Render that view model in a feature component.
4. Re-export the component from a thin `app/.../page.tsx`.

## Testing

```mermaid
%%{init: {"flowchart": {"curve": "basis", "nodeSpacing": 28, "rankSpacing": 40}}}%%
flowchart LR
  classDef unit fill:#fafafa,stroke:#18181b,stroke-width:2px,color:#18181b
  classDef integ fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#5b21b6

  subgraph U["UNIT  ·  *.test.ts"]
    LIB["lib / utils"]
    MAP["*-map.ts"]
  end

  subgraph I["INTEGRATION  ·  *.test.tsx"]
    HK["data hooks"]
    PG["feature pages"]
  end

  MAP -->|"pure → hooked"| HK
  HK -->|"hooked → UI"| PG

  class LIB,MAP unit
  class HK,PG integ
  style U fill:#f4f4f5,stroke:#d4d4d8,color:#18181b
  style I fill:#f5f3ff,stroke:#ddd6fe,color:#5b21b6
```

- `tests/` mirrors `src/`.
- Unit: pure functions, no network. Extend `tests/lib/utils.test.ts`.
- Integration: hooks and feature pages. Use `tests/utils/render.tsx` (`renderWithProviders`).
- Helpers: `tests/setup.ts`, `tests/utils/render.tsx`.

```bash
npm test           # watch
npm run test:run   # CI
```

## Adding a feature

1. Create `src/features/<name>/{data,components}`.
2. Add `something-map.ts` and `use-something.ts` as needed.
3. Add `SomethingPage.tsx` (PascalCase, named export).
4. Add `app/<route>/page.tsx`:

```tsx
import { SomethingPage } from '@/features/<name>/components/SomethingPage';

export default function Page() {
  return <SomethingPage />;
}
```

5. Add `tests/features/<name>/...` for mappers, hooks, or pages.

Shared chrome goes in `src/components/{ui,layout,feedback}`, not in the feature.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Next.js + inspector |
| `npm run build` / `start` | production |
| `npm run lint` | ESLint |
| `npm run prettier` | format |
| `npm run prepare` | install Husky git hooks |
| `npm run test` / `test:run` | Vitest |

## Tooling

- **Husky** — `lint-staged` (eslint --fix) on commit, `next build` on push, commitlint on commit-msg (`feat:`, `fix:`, …)
- **Prettier** — format on save (VS Code settings in `.vscode/`)
- **VS Code** — Next.js debug configs in `.vscode/launch.json`
