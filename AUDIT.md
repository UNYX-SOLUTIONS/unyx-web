# Auditoría del Proyecto — UNYX Solutions Landing Page

> Fecha: 2026-09-01 · Rama: `MisaelFront` · Estado: **pre-producción**
> Objetivo: saber dónde estamos, qué falta para producción y si se necesita backend.

---

## 1. Resumen ejecutivo

El sitio está **funcionalmente completo a nivel de código**: 26 páginas estáticas generadas, build limpio, **Lighthouse 100/100/100/100** (Performance, Accessibility, Best Practices, SEO) verificado hoy sobre el build actual.

Para salir a producción **no falta desarrollo grande**: faltan principalmente **contenido real y configuraciones con datos del cliente** (IDs de analítica, webhook, textos legales, contenido del Documento Maestro) y **una corrección funcional del menú móvil**. **No se requiere backend** para la v1.

| Área | Estado |
|---|---|
| Código / desarrollo | ✅ 6 fases del roadmap completadas |
| Build | ✅ Limpio, 26 páginas, sitemap generado |
| Calidad (Lighthouse) | ✅ 100 / 100 / 100 / 100 |
| Contenido | 🟡 Parcial (falta contenido del Word) |
| Configuraciones reales | 🔴 Pendientes (IDs, webhook, redes) |
| Textos legales | 🔴 Pendientes |
| Backend | ✅ No necesario para v1 |

---

## 2. Qué tenemos (inventario actual)

### Stack
- **Astro 7.2.6** (SSG estático) + **Tailwind CSS 4.3.3** (`@tailwindcss/vite`)
- Content collections (`astro:content` + `glob`), sitemap (`@astrojs/sitemap`)
- Vanilla JS (sin frameworks de UI); scripts: menú móvil, formulario, analítica

### Rutas generadas (26)
- `/` — home con 10 secciones
- `/soluciones` + 9 slugs dinámicos (`[slug].astro` desde `data/services.ts`)
- `/proyectos` + 4 slugs dinámicos (content collections)
- `/insights` + 3 slugs dinámicos (content collections)
- `/nosotros`, `/contacto`, `/privacidad`, `/terminos`, `/cookies`, `/404`

### Fases completadas
1. **F0 Build desbloqueado** — `content.config.ts`, `getStaticPaths`
2. **F1 Datos centralizados** — `consts.ts`, `data/company|services|technologies|navigation.ts`, `SEO.astro`, 7 `.md`
3. **F2 Páginas** — layouts + 21 componentes + 24 rutas
4. **F3 Componentes UI** — `Button` (5 variantes), `ArrowLink`, `SectionLabel` (prop `dark`), `Container`/`site-container` (36 archivos)
5. **F4 Assets y rendimiento** — OG image generada, fix crítico de cascada CSS (capas), contraste AA
6. **F5 SEO estructurado** — sitemap, JSON-LD (Organization, WebSite, Service, BreadcrumbList, Article condicional, FAQPage listo), `llms.txt` completo
7. **F6 Analítica** — `Analytics.astro` (GA4 + Clarity condicionales, eventos, scroll depth, persistencia UTM)

### Diseño (design system)
- Paleta: `black #0b0b0d`, `blue #0050f8`, `blue-hover #0b5cff`, `blue-light #8da7d9`, grays 100–900, `white`
- Fuente: system-ui stack (Inter/Geist/Manrope, sin webfonts)
- Tokens en `variables.css` (`@theme`), contenedor único `site-container`, botones/links/labels como componentes

---

## 3. Lo que falta para producción

### 🔴 Bloqueante (requerido antes de publicar)

| # | Pendiente | Detalle | Responsable |
|---|---|---|---|
| 1 | **Menú móvil sin botón** | El `Header` oculta la navegación en móvil (`max-[800px]:hidden`) pero **no existe el botón hamburguesa** (`[data-mobile-menu-toggle]`). En celular no hay navegación. | Dev (~1 h) |
| 2 | **Textos legales reales** | `/privacidad`, `/terminos`, `/cookies` dicen "documento en revisión". Obligatorios legalmente, y requisito para activar analítica (consentimiento). | Cliente + Dev |
| 3 | **Configuraciones reales** (`src/consts.ts`) | `GA4_MEASUREMENT_ID`, `CLARITY_PROJECT_ID`, `KOMHO_WEBHOOK_URL` (formulario → Kommo), `SOCIAL_LINKS` (LinkedIn/Instagram, hoy `"#"`). | Cliente |
| 4 | **Contenido del Documento Maestro** | Cuerpos de los 3 insights, detalle de proyectos (challenge/solution/results para Meditec/HSE/Sismeing), `capabilities` de cada servicio (Sección 10), equipo (`company.team` vacío), `pubDate` de insights (para Article JSON-LD). | Cliente |
| 5 | **Dominio + hosting + SSL** | Conectar `unyxsolutions.com` a Vercel/Netlify (Astro estático, deploy desde git). | Cliente |
| 6 | **Verificación post-deploy** | Google Search Console (sitemap + validar datos estructurados en Rich Results Test). | Dev |

### 🟡 Importante (ideal antes/justo después de lanzar)

| # | Pendiente | Detalle |
|---|---|---|
| 7 | **Imágenes reales** | Proyectos e insights (WebP/AVIF). La infraestructura ya está lista: campo `image` en los schemas, `ProjectCard`/`FeaturedInsight` renderizan imagen si existe (con dimensiones, sin CLS). |
| 8 | **Social links reales** | Si no hay perfiles, quitar la columna SOCIAL del footer en vez de dejar `#`. |
| 9 | **QA responsive real** | Probar en dispositivos físicos (iOS/Android) y navegadores. Hoy verificado solo en Chrome headless. |
| 10 | **Eventos de conversión activos** | Los eventos están implementados; solo se activan al poner los IDs (F6). |

### 🟢 Mejoras visuales/UX (post-lanzamiento, el "pulido")

- Pulido de hovers/transiciones y micro-interacciones (P3 del Word, sin animaciones complejas en v1)
- Página de equipo con fotos reales cuando existan
- OG image personalizada por página (hoy hay una global generada, 1200×630)
- HeroNetwork en three.js — **descartado para v1** por decisión del plan
- Limpieza: 9 archivos vacíos restantes (`ProjectHero`, `HeroNetwork`, `ServiceCard`, `scripts/*` ×3, `utils/formatDate|seo|urls`) — borrar o implementar; no bloquean nada

### Estimación de esfuerzo restante

| Tarea | Esfuerzo |
|---|---|
| Menú móvil (toggle + estados) | ~1 h |
| Contenido: pegar textos del Word en `.md`/data | ~2-3 h (según volumen) |
| Legales | depende del cliente |
| Configuraciones + deploy (Vercel/Netlify) | ~1 h |
| QA + Search Console | ~1-2 h |
| **Total desarrollo restante** | **~5-7 h + contenido del cliente** |

---

## 4. ¿Se necesita backend?

**No para la primera versión.** El sitio es 100% estático y cada necesidad funcional ya está resuelta sin servidor propio:

| Necesidad | Solución actual (sin backend) |
|---|---|
| Formulario de contacto | Webhook directo a **Kommo** (HTTP POST desde el front) + fallback mailto. Honeypot antispam incluido. |
| Publicar insights/proyectos | Archivos `.md` en el repo (content collections). El editor no necesita backend, solo commit/push → redeploy. |
| Analítica | **GA4 + Clarity** (terceros). |
| SEO | Estático: sitemap, JSON-LD, meta únicos. |
| Envío de emails | No hay envío propio; el webhook de Kommo o el mailto lo cubren. |

### Cuándo considerar backend (futuro, opcional)

1. **Quieren publicar contenido sin tocar el repo** → headless CMS (Decap, Contentful, Sanity) conectado a Astro, o un panel propio.
2. **Formulario con validación/spam más robusto** → función serverless (Vercel/Netlify Functions) que valide y reenvíe a Kommo, o servicio tipo Formspree/Getform.
3. **Funcionalidades de producto** (login, comentarios, reservas, chat) → ahí sí un backend real (Supabase/NestJS/etc.).
4. **Blog con comentarios o newsletters** → servicio externo (Beehiiv, Mailchimp).

**Recomendación:** lanzar v1 100% estático (cero costo de servidor, máximo rendimiento) y recién evaluar backend cuando exista una funcionalidad que lo exija.

---

## 5. Estado de calidad (medido hoy)

```
Build:       26 páginas, sin errores
Lighthouse:  Performance 100 · Accessibility 100 · Best Practices 100 · SEO 100
JSON-LD:     Organization, WebSite, Service, BreadcrumbList (Article pendiente de pubDate)
Sitemap:     25 URLs en sitemap-index.xml · robots.txt apuntando correctamente
Contraste:   AA (4.5:1) corregido en toda la interfaz (tokens blue-light + grises)
```

### Riesgos conocidos
- **Menú móvil inoperante** (ítem 1) — único bug funcional detectado.
- Clases con `!` residuales del trabajo previo (inofensivas tras el fix de capas CSS de F4; candidatas a limpieza).
- Dos lockfiles (`package-lock.json` + `pnpm-lock.yaml`) — recomendado estandarizar en uno (pnpm).

---

## 6. Camino recomendado a producción

**Paso 1 (bloqueantes técnicos):**
1. Implementar botón hamburguesa del Header (conectar con `MobileMenu` ya existente).
2. Reemplazar textos legales con versiones reales.
3. Llenar `consts.ts` con IDs reales y social links.

**Paso 2 (contenido):**
4. Pegar el contenido faltante del Documento Maestro (insights, detalle de proyectos, capabilities, equipo, pubDates).

**Paso 3 (deploy y verificación):**
5. Deploy a Vercel/Netlify con dominio propio + SSL.
6. Verificar Search Console (indexación, sitemap) y Rich Results Test (JSON-LD).
7. Validar formulario → Kommo con una prueba real end-to-end.

**Paso 4 (post-lanzamiento):**
8. Imágenes reales, pulido visual, OG por página, eventos de conversión (activos con los IDs).

**Veredicto:** con el menú móvil corregido y los datos del cliente en `consts.ts` + legales, el sitio puede estar en producción en cuestión de **días**, no semanas.
