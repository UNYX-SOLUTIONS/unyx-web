# Auditoría del Proyecto — UNYX Solutions Landing Page

## 1. Resumen ejecutivo

Proyecto de landing corporativa para **UNYX Solutions** (tecnología aplicada a necesidades reales). Es un sitio **estático** construido con **Astro 7** + **Tailwind CSS 4**, con la home (10 secciones) ya implementada y migrada a Tailwind. El resto de páginas (soluciones, proyectos, insights, nosotros, contacto, legales) existen como **rutas vacías/placeholders**, igual que sus componentes y capas de datos/utilidades.

**Estado global:** la home está funcional y con estilos migrados; el resto del sitio es *scaffolding* pendiente de construir.

---

## 2. Stack tecnológico

| Capa | Tecnología | Versión | Nota |
|---|---|---|---|
| Framework | Astro | `^7.2.6` | Output estático (`static`) |
| CSS | Tailwind CSS | `^4.3.3` | Vía plugin `@tailwindcss/vite` (no `@astrojs/tailwind`, que está deprecado) |
| Integración Tailwind | `@tailwindcss/vite` | `^4.3.3` | Registrado en `astro.config.mjs` |
| Runtime | Node.js | `>=22.12.0` | Local: v22.17.0 |
| Package manager | npm + pnpm | — | ⚠️ **Dos lockfiles** rastreados (`package-lock.json` y `pnpm-lock.yaml`) |

---

## 3. Arquitectura

```
frontend/
├── astro.config.mjs          # defineConfig + vite plugin tailwindcss
├── package.json
├── src/
│   ├── assets/               # README placeholder
│   ├── components/
│   │   ├── global/           # Header, Footer, MobileMenu, SEO(empty)
│   │   ├── home/             # 10 secciones de la home (implementadas)
│   │   ├── ui/               # Button, ArrowLink, SectionLabel, Container (+ServiceCard empty)
│   │   ├── solutions/        # 8 archivos vacíos
│   │   ├── projects/         # 7 archivos vacíos
│   │   ├── insights/         # 4 archivos vacíos
│   │   ├── about/            # 4 archivos vacíos
│   │   ├── contact/          # 2 archivos vacíos
│   │   └── three/            # HeroNetwork (vacío)
│   ├── content/              # colecciones: insights (3), projects (4) — md con title vacío
│   ├── content.config.ts     # VACÍO → rompe content collections
│   ├── data/                 # company, navigation, services, technologies (vacíos)
│   ├── layouts/
│   │   ├── BaseLayout.astro  # ✓ implementado (head/SEO/Header/Footer)
│   │   ├── ProjectLayout.astro  # vacío
│   │   └── ArticleLayout.astro  # vacío
│   ├── pages/
│   │   ├── index.astro       # ✓ única página implementada
│   │   └── ... (resto vacío)
│   ├── scripts/              # animations, header, hero-network (vacíos)
│   ├── styles/               # variables, reset, typography, utilities, global, animations
│   ├── utils/                # formatDate, schema, seo, urls (vacíos)
│   └── consts.ts             # vacío
└── public/                   # favicon, logos/tech (17 SVG), robots.txt, llms.txt, images (vacías)
```

### Estructura de estilos

| Archivo | Rol |
|---|---|
| `variables.css` | `@theme` (paleta + fuente) + tokens de diseño (`:root`) |
| `reset.css` | Reset base (box-sizing, tipografía, enlaces, listas) |
| `typography.css` | Estilos base de `h1-h4`, `p`, `.eyebrow`, `.text-muted`, `.text-light` |
| `utilities.css` | `.container`, `.grid-12`, `.sr-only`, `.border-top/bottom`, `.bg-black/white`, `.text-blue` |
| `global.css` | Importa `tailwindcss` + los demás; `.section`, `.section-heading` |
| `animations.css` | `prefers-reduced-motion` |

> ⚠️ Estas clases globales (`.container`, `.section`, `.grid-12`, `.eyebrow`, etc.) quedaron **huérfanas** tras la migración: ningún componente las usa ya.

---

## 4. Migración a Tailwind — estado

- **Completada** en todos los componentes con contenido real (global, home, ui).
- Cero bloques `<style>` scoped restantes en los `.astro`.
- Enfoque: **colores normalizados a tokens** de `@theme` (los hex "desviados" como `#075cff` → `blue`, `#0a0a0c` → `black`, grises sueltos → `gray-*`); **spacing/tipografía fieles** (arbitrarios donde no hay escala exacta); decoración compleja (gradientes, `mask-image`, pseudo-elementos, `stroke-dasharray`) vía arbitrarios de Tailwind v4.

---

## 5. Componentes implementados

### Global
| Componente | Estado |
|---|---|
| `Header.astro` | ✅ Migrado |
| `Footer.astro` | ✅ Migrado |
| `MobileMenu.astro` | ✅ Migrado |
| `SEO.astro` | ⬜ Vacío |

### Home (página principal — todas ✅ migradas)
| Componente | ID de sección | Contenido |
|---|---|---|
| `Hero.astro` | `#inicio` | Titular + red/nodos animados |
| `Problems.astro` | `#problema` | "El problema" (6 tarjetas) |
| `Solutions.astro` | `#soluciones` | 9 servicios en 3 grupos + sistema de conexión |
| `FeaturedCase.astro` | `#caso-destacado` | Caso Luxviajes (ventanas visuales) |
| `Projects.astro` | `#proyectos` | 3 proyectos destacados |
| `Process.astro` | `#como-trabajamos` | 4 pasos |
| `WhyUnyx.astro` | `#por-que-unyx` | 4 principios |
| `TechEcosystem.astro` | `#ecosistema-tecnologico` | 16 tecnologías en 4 grupos |
| `Insights.astro` | `#insights` | 1 destacado + 2 secundarios |
| `FinalCTA.astro` | `#contacto` | CTA final |

### UI (✅ migrados, pero **sin usar** actualmente)
| Componente | Estado |
|---|---|
| `Button.astro` | ✅ Migrado (variantes primary/secondary/dark-secondary + tamaños) |
| `ArrowLink.astro` | ✅ Migrado |
| `SectionLabel.astro` | ✅ Migrado |
| `Container.astro` | ✅ (usa clase `.container` global) |
| `ServiceCard.astro` | ⬜ Vacío |

> ⚠️ `Button`, `ArrowLink`, `SectionLabel`, `Container` **no se importan** en ningún `.astro` actual.

### Por construir (componentes vacíos)
- **solutions/**: `SolutionHero`, `SolutionOverview`, `SolutionCapabilities`, `SolutionProcess`, `SolutionProjects`, `SolutionCTA`.
- **projects/**: `ProjectsHero`, `ProjectCard`, `ProjectHero`, `ProjectChallenge`, `ProjectSolution`, `ProjectResults`.
- **insights/**: `InsightsHero`, `FeaturedInsight`, `InsightCard`, `ArticleContent`.
- **about/**: `AboutHero`, `AboutUNYX`, `Principles`, `Team`.
- **contact/**: `ContactHero`, `ContactForm`.
- **three/**: `HeroNetwork`.

---

## 6. Páginas / rutas

| Ruta | Estado |
|---|---|
| `/` (index) | ✅ Implementada |
| `/nosotros` | ⬜ Vacío |
| `/contacto` | ⬜ Vacío |
| `/soluciones` (index) | ⬜ Vacío |
| `/soluciones/{9 slugs}` | ⬜ Vacíos (desarrollo-software, crm-automatizacion-comercial, automatizacion-ia, integraciones-apis, soporte-gestion-tecnologica, infraestructura-redes, cloud-datos-continuidad, iot-automatizacion-industrial, integracion-ot-it) |
| `/proyectos` (index) | ⬜ Vacío |
| `/proyectos/[slug]` | ⬜ Vacío (⚠️ sin `getStaticPaths`) |
| `/insights` (index) | ⬜ Vacío |
| `/insights/[slug]` | ⬜ Vacío (⚠️ sin `getStaticPaths`) |
| `/privacidad`, `/terminos`, `/404` | ⬜ Vacíos |

---

## 7. Paleta de colores actual

Definida en `src/styles/variables.css` dentro de `@theme` (genera utilidades `bg-*`, `text-*`, `border-*`).

### Colores de marca
| Token | Hex | Uso típico |
|---|---|---|
| `--color-blue` | `#0050f8` | Acento primario, CTAs, enlaces, eyebrow |
| `--color-blue-hover` | `#0b5cff` | Hover de elementos azules |

### Neutros
| Token | Hex | Uso típico |
|---|---|---|
| `--color-black` | `#0b0b0d` | Fondo secciones oscuras |
| `--color-black-soft` | `#111216` | Paneles oscuros |
| `--color-white` | `#ffffff` | Fondo secciones claras |
| `--color-gray-900` | `#1a1c20` | Paneles/letreros oscuros |
| `--color-gray-800` | `#2a2d33` | Bordes oscuros |
| `--color-gray-700` | `#45474a` | Texto muted, bordes |
| `--color-gray-600` | `#63666d` | Texto secundario |
| `--color-gray-500` | `#858991` | Texto tenue |
| `--color-gray-400` | `#a7abb3` | Texto claro/desactivado |
| `--color-gray-300` | `#c9cdd4` | Bordes hover |
| `--color-gray-200` | `#e3e6eb` | Bordes (tema claro) |
| `--color-gray-100` | `#f3f5f7` | Fondos claros/hover |

### Tokens semánticos (`:root`)
```css
--color-bg:         var(--color-white)
--color-text:       var(--color-black)
--color-text-muted: var(--color-gray-700)
--color-border:     var(--color-gray-200)
```

### Tipografía
```css
--font-sans: Inter, Geist, Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

> **Nota de normalización:** el CSS original usaba colores "desviados" (`#075cff`, `#0a0a0c`, `#343a46`, etc.) que durante la migración se **unificaron a estos tokens**, lo que corrige sutilmente algunos tonos.

### Otros tokens de diseño
- **Tamaños de fuente:** `--fs-xs` (0.75rem) → `--fs-4xl` (4.5rem)
- **Line heights:** `--lh-tight` 1.05 / `--lh-heading` 1.1 / `--lh-body` 1.6
- **Spacing:** `--space-1` (4px) → `--space-11` (160px)
- **Radius:** `8 / 12 / 16 / 20px`
- **Transiciones:** `--transition-fast` 160ms / `--transition-base` 240ms
- **Layout:** `--container-max: 1280px`, `--container-padding: 24px`, `--section-padding-y: 128px`

---

## 8. Contenido y datos

| Recurso | Estado |
|---|---|
| `src/content/insights/*.md` (3) | ⬜ Solo `title: ""` vacío |
| `src/content/projects/*.md` (4) | ⬜ Solo `title: ""` vacío |
| `src/content.config.ts` | ⬜ **Vacío** → error `collections: expected record, received undefined` |
| `src/data/*.ts` (5) | ⬜ Vacíos |
| `src/utils/*.ts` (4) | ⬜ Vacíos |
| `src/scripts/*.ts` (3) | ⬜ Vacíos |
| `src/consts.ts` | ⬜ Vacío |

---

## 9. Assets

- **`public/logos/tech/`** — 17 logos de tecnologías (Astro, React, Next.js, Node.js, Python, Flutter, Firebase, Google, Microsoft 365, n8n, PostgreSQL, Supabase, OpenAI, Kommo, Meta, WhatsApp, supabase). ✅ Existen.
- **`public/images/`** — directorios vacíos (`.gitkeep`) para `brand`, `insights`, `og`, `projects/*`, `technologies`. ⚠️ Falta el OG image (`/images/og/default-og.jpg` referenciado en `BaseLayout` no existe).
- **`public/fonts/`** y **`public/models/`** — solo README.
- **`favicon.svg` / `favicon.ico`** — ✅.

---

## 10. Problemas detectados

1. **Build no pasa** por dos causas preexistentes:
   - `src/content.config.ts` vacío → `collections: Invalid input: expected record, received undefined`.
   - `src/pages/insights/[slug].astro` y `src/pages/proyectos/[slug].astro` vacíos → falta `getStaticPaths()`.
2. **Dos lockfiles** (`package-lock.json` + `pnpm-lock.yaml`): riesgo de deriva entre instalaciones.
3. **Clases globales huérfanas** en `utilities.css`/`typography.css`/`global.css` (`.container`, `.section`, `.grid-12`, `.eyebrow`, `.text-muted`, etc.) tras la migración.
4. **Componentes UI sin uso** (`Button`, `ArrowLink`, `SectionLabel`, `Container`).
5. **`SEO.astro` vacío**: el SEO actual está inline en `BaseLayout.astro`.
6. **Assets faltantes**: OG image referenciada no existe; imágenes de proyectos/insights vacías.
7. **Contenido vacío**: todos los `.md` de content collections solo tienen `title: ""`.

---

## 11. Secciones que faltarían / roadmap sugerido

### Prioridad alta (bloquean el sitio completo)
- [ ] Implementar `src/content.config.ts` (definir colecciones `insights` y `projects`).
- [ ] Implementar `getStaticPaths()` en `[slug].astro` de insights y proyectos (o marcar `prerender = false`).
- [ ] Completar el contenido de los `.md` (frontmatter + body).

### Páginas por construir
- [ ] `/nosotros` → `AboutHero`, `AboutUNYX`, `Principles`, `Team`.
- [ ] `/contacto` → `ContactHero`, `ContactForm` (formulario funcional / integración).
- [ ] `/soluciones/*` (10 páginas) → `SolutionHero`, `SolutionOverview`, `SolutionCapabilities`, `SolutionProcess`, `SolutionProjects`, `SolutionCTA`.
- [ ] `/proyectos` + `/proyectos/[slug]` → `ProjectsHero`, `ProjectCard`, `ProjectHero`, `ProjectChallenge`, `ProjectSolution`, `ProjectResults`.
- [ ] `/insights` + `/insights/[slug]` → `InsightsHero`, `FeaturedInsight`, `InsightCard`, `ArticleContent`.
- [ ] `/privacidad`, `/terminos`, `/404`.

### Cross-cutting
- [ ] Componente `SEO` (extraer la lógica del head de `BaseLayout`).
- [ ] Capa de datos (`data/`, `utils/`, `consts.ts`) para centralizar navegación, servicios, tecnologías, empresa.
- [ ] Scripts de interacción (`header.ts`, `hero-network.ts`, `animations.ts`) — hoy el header/menú se manejan con `<script>` inline en `MobileMenu`.
- [ ] `HeroNetwork` (three.js?) — hoy la red del hero es CSS puro.
- [ ] Limpiar clases globales huérfanas y decidir si se unifican los dos lockfiles.
- [ ] Añadir OG images y assets de proyectos/insights.

---

## 12. Recomendaciones

1. **Unificar gestor de paquetes** (pnpm, dado que `pnpm-lock.yaml` ya estaba rastreado) y eliminar el lockfile sobrante.
2. **Resolver los dos errores de build** antes de seguir agregando páginas, para tener CI/feedback estable.
3. **Reutilizar los componentes UI** ya migrados (`Button`, `ArrowLink`, `SectionLabel`, `Container`) al construir las páginas nuevas, en vez de duplicar utilidades inline.
4. **Limpiar** `utilities.css`/`typography.css`/`global.css` de las clases que ya nadie usa, conservando solo las que aportan (o migrarlas a `@utility` de Tailwind v4).
