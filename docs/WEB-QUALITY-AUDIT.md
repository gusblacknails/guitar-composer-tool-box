# Auditoría de calidad web — Guitar Composers Toolbox

**Última actualización:** marzo 2025  
Alcance: sitio completo (performance, accesibilidad, SEO, buenas prácticas).

---

## Estado actual (post-correcciones)

| Área              | Estado | Pendiente opcional        |
|-------------------|--------|---------------------------|
| Accesibilidad     | OK     | Revisar dropdowns con axe |
| Buenas prácticas  | OK     | —                         |
| Performance       | OK     | Optimizar imágenes (WebP) |
| SEO               | OK     | —                         |

**Corregido:** ID duplicado, `class` → `className` (React), skip link, enlaces externos `rel="noopener noreferrer"`, eliminación de `console.log`, foco visible (`:focus-visible`), alt del logo, typos y texto unificado.

---

## Resumen ejecutivo (auditoría inicial)

| Área            | Hallazgos | Críticos | Prioridad alta |
|-----------------|-----------|----------|----------------|
| Accesibilidad   | 6         | 1        | 2              |
| Buenas prácticas | 4       | 0        | 1              |
| Performance     | 3         | 0        | 1              |
| SEO             | 0         | 0        | 0              |

---

## Problemas críticos (corregidos)

### 1. **[Accesibilidad] ID duplicado en la página**  
**Archivo:** `src/components/Harmonizer.js`

- **Impacto:** Dos `<h2>` compartían `id="chordByFred"`. Los IDs deben ser únicos (HTML válido y lectores de pantalla).
- **Corrección aplicada:** El segundo encabezado pasa a usar `id="chordByFretSeventh"`.

---

### 2. **[Buenas prácticas] Uso de `class` en lugar de `className`**  
**Archivo:** `src/components/ChordFinder.js`

- **Impacto:** En React/JSX el atributo es `className`. Usar `class` deja atributos en el DOM no deseados y puede afectar hidratación.
- **Corrección aplicada:** Sustituido `class` por `className` en el contenedor y en el `<h2>` de "Basic Chords".

---

## Problemas de prioridad alta

### 3. **[Accesibilidad] Falta de “Skip to main content”**  
**Archivo:** `src/components/layout.js`

- **Impacto:** Usuarios de teclado y lectores de pantalla deben atravesar todo el menú en cada página.
- **Corrección aplicada:** Enlace “Skip to main content” que lleva a `#main-content`, con estilos en `layout.scss` (oculto por defecto, visible al recibir foco).

---

### 4. **[Buenas prácticas] Enlaces externos sin `rel="noopener noreferrer"`**  
**Archivos:** `src/header.js`, `src/components/FilterbyFret.js`, `src/components/UkeFinder.js`

- **Impacto:** Si se usa `target="_blank"`, la página enlazada puede acceder a `window.opener` (riesgo de tabnabbing).
- **Corrección aplicada:** Añadido `rel="noopener noreferrer"` (y `target="_blank"` donde correspondía) en enlaces a dominio externo.

---

## Problemas de prioridad media

### 5. **[Performance] `console.log` en código de producción** ✅ Corregido

Todos los `console.log` han sido eliminados. Los `catch` que solo hacían log del error se han dejado con comentarios o con guardas (p. ej. `ChordFinder` comprueba `chordFind` antes de usarlo).

---

### 6. **[Accesibilidad] Outline en enlaces** ✅ Corregido

Añadidos estilos `a:focus-visible`, `button:focus-visible` y `[tabindex]:focus-visible` en `layout.scss` con outline visible (color `$base-color`) para que el foco por teclado sea claro.

---

### 7. **[Accesibilidad] Texto alternativo del logo** ✅ Corregido

Actualizado a `alt="Guitar Composers Toolbox – home"` en `src/header.js`.

---

### 8. **[Performance] Imágenes sin optimización moderna**

- Se intentó usar `gatsby-plugin-image` pero el plugin no se resolvía correctamente en este entorno (error "unreachable"). Se ha revertido a la versión anterior: fondos en CSS y `CardMedia` con `require()` para triads.
- **Para activar optimización de imágenes más adelante:** instalar una versión compatible (`npm install gatsby-plugin-image@1.2.2` con Gatsby 3), añadir el plugin en `gatsby-config.js`, y volver a usar `StaticImage` en `Home.js` como en la documentación de Gatsby.

---

### 9. **[Accesibilidad] Subheader con typo** ✅ Corregido

Corregido “choosen” → “chosen” en el subheader del card del Scale Harmonizer.

---

## Prioridad baja

### 10. **[SEO / UX] Encabezado “What aims to be this site?”** ✅ Corregido

Unificado a “What is this site about?” en el menú (`header.js`) y en la tarjeta de Home (`Home.js`).

---

### 11. **[Accesibilidad] Dropdowns del menú** ✅ Corregido

- En `src/header.js`: cada `DropdownToggle` tiene `id` único y `aria-haspopup="true"`; cada `DropdownMenu` tiene `aria-labelledby` apuntando al toggle y `role="menu"`; los ítems usan `role="menuitem"` (enlaces con `role="menuitem"`, `DropdownItem` con `tag="div"` y `role="none"` para no duplicar semántica). El enlace externo "Beat it! Music Machine" pasa a ser un `<a>` con `role="menuitem"`. Añadido `aria-label` al `NavbarToggler` ("Abrir o cerrar menú de navegación"). Corregido "Ukelele" → "Ukulele" en el menú.

---

## Lo que está bien

- **SEO:** Títulos y meta descriptions por página, canonical, JSON-LD (WebApplication), sitemap y robots configurados.
- **Estructura:** Un `<h1>` por página, jerarquía de encabezados coherente.
- **Semántica:** Uso de `<main>` en el layout.
- **Idioma:** `lang` en `<html>` (por defecto `en`).
- **Enlaces externos:** Tras las correcciones, enlaces salientes con `rel="noopener noreferrer"` donde aplica.

---

## Orden de actuación recomendado

1. **Hecho:** Corregir ID duplicado, `class`/`className`, skip link y enlaces externos.
2. **Hecho:** Eliminar todos los `console.log` de producción.
3. **Hecho:** Estilos de foco (`:focus-visible`) y `alt` del logo.
4. **Hecho:** Corregir “choosen” → “chosen” y unificar “What is this site about?”.
5. **Pendiente:** Optimización de imágenes (revertida por error de resolución del plugin; ver punto 8).

---

## Indexación (Google Search Console)

- **Problema típico:** "Page with redirect" o "No indexadas" por duplicado. Aparece cuando Google rastrea variantes (http/https, www, o **con/sin barra final**).
- **Páginas del Scale Harmonizer:** Las URLs `/guitar-harmonizer/:scale` deben ser siempre **sin barra final**. Si en el sitio o en el servidor se servía también la versión con `/` (p. ej. `/guitar-harmonizer/c-dorian/`), Google veía dos URLs y no indexaba bien. Correcciones aplicadas:
  - Enlaces internos sin barra final (header, Home, HarmonizerListNav con `to` en lugar de `href`).
  - `static/_redirects`: redirección 301 de `/*/` → `/:splat` para que cualquier URL con barra final lleve a la canónica sin barra (Netlify).
- **Qué hacer en deploy:** (1) Definir `URL=https://www.guitarcomposerstoolbox.com`. (2) Redirigir http→https y dominio sin www→www. (3) Si el host no es Netlify, configurar redirección equivalente (trailing slash → sin trailing slash).

---

## Checklist rápido antes de cada despliegue

- [ ] Core Web Vitals en rango (LCP &lt; 2,5 s, CLS &lt; 0,1, INP &lt; 200 ms).
- [ ] Sin errores de accesibilidad críticos (Lighthouse / axe).
- [x] Sin `console.log` en producción.
- [ ] HTTPS y meta tags correctos en producción.
- [ ] Variable `URL=https://www.guitarcomposerstoolbox.com` en el entorno de build (producción).

Para una revisión numérica (métricas y puntuaciones), ejecutar **Lighthouse** en una build de producción (`gatsby build && gatsby serve`) sobre la homepage y una página de herramienta (p. ej. Guitar Harmonizer).

---

## Cómo volver a ejecutar esta auditoría

1. Revisar que no queden `console.log` activos: `grep -r "console\.log" src --include="*.js"`.
2. Comprobar IDs únicos por página (especialmente en listados o bucles).
3. Comprobar que enlaces externos tengan `rel="noopener noreferrer"` (y `target="_blank"` si abren en nueva pestaña).
4. En React/JSX, usar siempre `className` en lugar de `class`.
5. Ejecutar Lighthouse (Chrome DevTools → Lighthouse) en modo producción.
