# 🕊️ Bienvenido a Pelícano Bueno

**Querido hermano:**

Quiero compartir contigo este proyecto en el que he estado trabajando durante varios meses. En realidad, es el fruto de mucho esfuerzo, de formación técnica y sobre todo, de perseverancia. Hoy, todo ese trabajo se ve materializado en este proyecto, que comenzó y tuvo que reiniciarse varias veces desde cero debido a los desánimos, a las dudas sobre si aquello que quería compartir podría ser realmente útil y a la incertidumbre sobre cuántas personas llegarían a leer estos contenidos.

La idea de elaborar este proyecto nació durante un momento difícil en mi vida espiritual y como respuesta a la necesidad que sentía de ayudar a otros en su formación en la fe.

**Pelícano Bueno** es un sitio donde podrás encontrar notas que buscan contribuir a tu formación espiritual, aclarar algunas de tus dudas y ayudarte a conocer aspectos nuevos de nuestra fe. Todo el contenido es cuidadosamente revisado, con la intención de ofrecer información precisa y fundamentada, para que puedas leerla y compartirla con otras personas con confianza.

## ✨ ¿Por qué este nombre?

Ciertamente, el pelícano no es precisamente el ave más bella, sin embargo, aunque se trata de un ave costera, su simbolismo va mucho más allá de su apariencia.

Santo Tomás de Aquino, en uno de sus más bellos himnos dedicados a la adoración eucarística, **Adoro te devote**, se refiere al Señor Jesús como *«Pelícano Bueno»*. Esta expresión está relacionada con una antigua creencia según la cual, cuando el pelícano no encontraba alimento para sus polluelos durante el día, al caer la tarde regresaba al nido y se hería el pecho para alimentarlos con su propia carne.

Esta antigua imagen se convirtió en un hermoso símbolo del sacrificio y la entrega de Cristo. Así como se decía que el pelícano entregaba su propio cuerpo para alimentar a sus crías, Jesús entregó su vida por nosotros y para nuestra salvación.

De ahí nace el nombre de este proyecto: **Pelícano Bueno**, como una referencia a Cristo, que se entrega por amor a nosotros. ❤️

![Pelícano Bueno](./public/images/pelicano-bueno-md.png)

## 🙏 Agradecimientos

Primeramente, agradezco a **Dios**, uno y trino, pues de él procede todo bien, todo conocimiento y todos los dones que ha puesto en cada uno de nosotros. A él agradezco el conocimiento, las capacidades y las oportunidades que me han permitido llevar a buen término este proyecto. 🕯️🤍

Agradezco también a mi padre y señor, **San José**, a quien encomiendo cada día mis manos, mi esfuerzo y mi jornada. A él he confiado también las muchas horas de trabajo, aprendizaje y programación que han hecho posible la construcción de este sitio. 💚🤎

Agradezco a **mamita María de Guadalupe**, a quien confío los deseos de mi corazón y a quien, como buena madre, le pido siempre que acompañe y cuide a las personas que amo. 🌹

Por último, pero no menos importante, agradezco a mi familia, quienes me han educado en la fe y han sido parte fundamental de mi formación humana y académica, gracias a la cual he podido desarrollar este proyecto. También agradezco a aquellas personas que siempre llevo en mi corazón y que, junto con mis padres y mi hermana, me animan a seguir adelante, confían en mí y me brindan su amor. ❤️

## 🌱 Un proyecto que continúa

Este sitio aún no está terminado o, al menos, todavía no ha llegado a ser como me gustaría verlo algún día. Hay muchos aspectos por mejorar, funciones que pueden hacerse más eficientes y muchas otras cosas que seguramente podrán realizarse de una mejor manera.

Sin embargo, **Pelícano Bueno** no pretende ser un proyecto terminado, sino un proyecto en constante crecimiento. Mientras Dios nos conceda el don de la vida, seguiremos aprendiendo, corrigiendo, mejorando y trabajando para que este espacio pueda cumplir con el propósito para el que nació, poner nuestros conocimientos y nuestro esfuerzo al servicio de los demás y contribuir, aunque sea de una pequeña manera, a su formación en la fe.

🙏 Gracias por visitar este espacio, por leer y sobre todo, por permitir que este proyecto pueda llegar hasta ti.

Que todo lo que aquí encuentres pueda ser para mayor gloria de Dios y para el bien de quienes lo visitan.

 🕊️ **Paz y Bien.**

---


# 💻 Notas para el desarrollador

Blog digital de evangelización católica. Sitio estático (SSG), paleta de colores #fff y #000, contenido gestionado en Markdown.

**Sitio en producción:** https://pelicano-bueno.vercel.app

---

## 1. Stack

| Tecnología | Versión | Por qué se eligió |
|---|---|---|
| **Astro** | `7.2.9` (modo SSG) | El sitio es 100% contenido de lectura (notas, categorías) sin necesidad de servidor en cada request. SSG genera HTML estático en build time → carga instantánea, hosting barato/gratuito, y superficie de ataque mínima (no hay backend que exploten). Astro además permite "islas" si en el futuro se necesita interactividad puntual, sin cargar un framework completo de entrada. |
| **TypeScript** | vía Astro | Tipado estático en scripts (`date.ts`, `nav.ts`) y en los schemas de Content Collections — errores de tipos (fecha mal formada, campo faltante) se detectan en build, no en producción. |
| **Markdown + Content Collections** | API nativa `astro:content` (Content Layer API, loader `glob`) | Escribir notas en Markdown es más simple y portable que HTML a mano. Content Collections valida cada entrada contra un schema Zod — si falta un campo o el tipo es incorrecto, el build falla con un error claro en vez de romperse en producción. |
| **Zod** | incluido con Astro | Motor de validación de los schemas de contenido (`content.config.ts`). No se instala aparte. |
| **Bootstrap Icons** | `bootstrap-icons` (npm) | Se decidió usar el paquete npm en vez del CDN original del prototipo HTML. Razón: en SSG, depender de un CDN externo agrega una petición de red innecesaria en cada carga; el paquete local se empaqueta con Vite y funciona offline en desarrollo. |
| **CSS Grid/Flexbox nativo** | — | Se reemplazó Bootstrap Grid (CDN) por reglas CSS propias con **los mismos nombres de clase** (`row`, `col-md-6`, `g-4`, etc.) para no reescribir el HTML del prototipo original. Elimina una dependencia externa completa a cambio de ~60 líneas de CSS. |
| **rehype-external-links** | `^3.0.0` | Plugin del ecosistema `unified`/`rehype` (el mismo motor que procesa Markdown en Astro) para agregar automáticamente `target="_blank" rel="noopener noreferrer"` a todo link externo en el cuerpo de las notas, sin tener que escribirlo a mano en cada Markdown. |
| **@astrojs/markdown-remark** | `^7.2.4` | Astro 7.x cambió su procesador de Markdown por defecto (uno interno, más rápido). Para usar `rehypePlugins` (API "clásica" de `unified`) hace falta instalar este paquete oficial explícitamente. |
| **@astrojs/sitemap** | `^3.7.4` | Integración oficial de Astro; genera `sitemap-index.xml` automáticamente en cada build, listando todas las rutas estáticas (notas, categorías, home) sin mantenimiento manual. |
| **gsap** | `^3.15.0` | Animaciones de la página 404 (SVG animado). Sin dependencias de framework, se importa solo donde se usa. |
| **Vercel** | — | Despliegue continuo desde GitHub, cero configuración para proyectos Astro SSG, dominio gratuito con HTTPS. |

**Regla de trabajo aplicada durante todo el proyecto:** antes de instalar cualquier dependencia nueva, se verificó en el registro de npm (`npm view <paquete> version / deprecated / peerDependencies`) que no estuviera deprecada y que no fijara una versión de Astro incompatible con `7.2.9`.

---

## 2. Metodología

Desarrollo por **slices verticales**: cada paso deja algo visible y funcional en el navegador antes de avanzar al siguiente (Home estático → Content Collections → detalle de nota → categorías con paginación → SEO → despliegue). Esto facilita aislar errores: si algo se rompe, el cambio sospechoso es solo el del paso más reciente.

---

## 3. Instalación y ejecución en local

### Requisitos
- Node.js `>= 22.12.0` (ver `engines` en `package.json`)
- npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Cordero1522/pelicano-bueno.git
cd pelicano-bueno

# 2. Instalar dependencias
npm install

# 3. Levantar servidor de desarrollo
npm run dev
```

El sitio queda disponible en `http://localhost:4321`.

### Otros comandos útiles

```bash
npm run build     # Genera el sitio estático en /dist (incluye sitemap)
npm run preview   # Sirve /dist localmente, simula producción
rm -rf .astro     # Limpia el caché de tipos de Astro (necesario tras cambios en content.config.ts)
```

### Dependencias de desarrollo instaladas durante el desarrollo (orden cronológico)

```bash
npm create astro@latest          # Inicialización del proyecto
npm install bootstrap-icons
npm install rehype-external-links
npm install @astrojs/markdown-remark
npx astro add sitemap            # Instala @astrojs/sitemap y edita astro.config.mjs automáticamente
npm install gsap
```



## 4. Organigrama del proyecto

```
pelicano-bueno/
├── astro.config.mjs          # Integraciones (sitemap), site URL, procesador de Markdown
├── package.json
├── public/                   # Archivos servidos tal cual, sin procesar
│   ├── logo.webp             # Favicon + imagen OG por defecto
│   ├── robots.txt
│   └── images/
│       ├── autores/
│       └── notas/
└── src/
    ├── content.config.ts     # Definición de colecciones (notas, autores) + schemas Zod
    ├── components/
    │   ├── SiteHeader.astro
    │   ├── SiteNav.astro     # Genera links de categorías desde categories.ts + estado activo
    │   ├── SiteFooter.astro
    │   └── NoteCard.astro    # Tarjeta de nota reutilizable (Home, categorías, relacionadas)
    ├── content/
    │   ├── notas/            # Un .md por nota
    │   └── autores/          # Un .md por autor
    ├── layouts/
    │   └── BaseLayout.astro  # <head> completo: SEO, Open Graph, JSON-LD, imports de CSS/iconos
    ├── lib/
    │   ├── categories.ts     # Fuente única de verdad de categorías (labels + slugs)
    │   ├── formatDate.ts     # Formateador de fechas centralizado (UTC, dd de mes de aaaa)
    │   └── site.ts           # SITE_URL y GSC_VERIFICATION
    ├── pages/
    │   ├── index.astro                          # Home: nota principal + sidebar + 10 adicionales
    │   ├── 404.astro                             # Página de error con animación SVG
    │   ├── notas/
    │   │   └── [id].astro                        # Detalle de nota (getStaticPaths + render)
    │   └── categorias/
    │       └── [categoria]/
    │           └── [...page].astro               # Listado paginado por categoría
    ├── scripts/
    │   ├── date.ts            # Fecha del top-bar
    │   ├── nav.ts             # Toggle del menú móvil
    │   └── error-404.ts       # Animación GSAP del 404
    └── styles/
        └── global.css         # Único archivo de estilos del sitio completo
```

---

## 5. Modelo de contenido (Content Collections)

Definido en `src/content.config.ts` con la **Content Layer API** (`glob` loader):

```typescript
const notas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notas' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(CATEGORY_LABELS),   // lista fija, evita typos ("Biblia" vs "BIBLIA")
    date: z.date(),
    author: reference('autores'),        // llave foránea hacia la colección autores
    image: z.string().optional(),
    excerpt: z.string(),
  }),
});

const autores = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/autores' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string(),
    socials: z.object({
      twitter: z.string().optional(),
      instagram: z.string().optional(),
      facebook: z.string().optional(),
    }).optional(),
  }),
});
```

**Decisiones clave:**
- `category` es `z.enum()`, no texto libre — el set de categorías vive en `src/lib/categories.ts` y se comparte entre schema, nav, footer y páginas de categoría.
- `author` es `reference('autores')`, no un string — evita repetir foto/bio/redes en cada nota; el `id` del archivo `.md` del autor es la clave (ej. `misael-cordero.md` → `author: misael-cordero`).
- El `id` de cada nota es el nombre de su archivo `.md` (sin extensión) — es lo que arma las URLs (`/notas/{id}/`).

---

## 6. Lógica de negocio principal

### Nota más reciente como principal (Home)
```typescript
const notasOrdenadas = notas.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
const notaPrincipal = notasOrdenadas[0];        // más reciente
const notasSidebar = notasOrdenadas.slice(1, 3); // 2 siguientes
const notasAdicionales = notasOrdenadas.slice(3, 13); // hasta 10 más (13 notas totales en Home)
```
No requiere mantenimiento manual: cada nota nueva con fecha más reciente ocupa automáticamente la posición `[0]`.

### Categorías con paginación
`src/pages/categorias/[categoria]/[...page].astro` usa `getStaticPaths({ paginate })` para generar, por cada categoría, tantas páginas como haga falta (`pageSize: 6`). La navegación `← Anteriores / Siguientes →` solo aparece si hay más de 1 página (más de 6 notas en esa categoría).

### Notas relacionadas
En el detalle de cada nota, se filtran las demás notas de la **misma categoría** (excluyendo la actual), ordenadas por fecha, tomando las 3 más recientes.

---

## 7. SEO implementado

Centralizado en `BaseLayout.astro`, recibido vía props desde cada página:

- `title`, `description`, `meta author`, `meta robots`, `link rel="canonical"`.
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) y Twitter Card.
- **JSON-LD**: `WebSite` con `SearchAction` en todas las páginas (vía `BaseLayout`), y `Article` adicional en el detalle de cada nota (título, autor, fecha, imagen) para habilitar la posibilidad técnica de rich results/sitelinks en Google — la aparición final depende del algoritmo de Google, no es garantizable.
- `sitemap-index.xml` autogenerado en cada build por `@astrojs/sitemap`.
- `public/robots.txt` con referencia al sitemap.
- Verificación de propiedad en Google Search Console vía meta tag (`GSC_VERIFICATION` en `src/lib/site.ts`).

---

## 8. Errores resueltos durante el desarrollo (para referencia futura)

| Problema | Causa | Solución |
|---|---|---|
| Íconos 404 en `<link href="bootstrap-icons/...">` | Un `<link>` no pasa por Vite, no puede resolver rutas de `node_modules` | Importar el CSS en el frontmatter: `import 'bootstrap-icons/font/bootstrap-icons.css'` |
| `The collection "notas" does not exist` | Caché de tipos de Astro desincronizado tras crear `content.config.ts` con el servidor corriendo | `rm -rf .astro` y reiniciar `npm run dev` |
| Fecha se muestra un día antes (ej. 10 → 9 de agosto) | `Date` de Zod se interpreta en UTC; `toLocaleDateString` la convierte a hora local del servidor | Forzar `timeZone: 'UTC'` en el formateador centralizado (`formatDate.ts`) |
| `Invalid content reference... does not exist` | El campo `author` de una nota no coincidía con el `id` (nombre de archivo) real de la colección `autores` | El valor de `author:` debe ser el nombre del archivo `.md` del autor, sin extensión, sin comillas |
| Estilos no cargan en producción (Vercel) pero sí en local | `<link href="/src/styles/global.css">` — esa ruta solo la sirve el servidor de desarrollo de Vite; no existe en el build final | Importar el CSS en el frontmatter del layout: `import '../styles/global.css'` |
| `markdown.rehypePlugins` deprecated warning | Astro 7.x movió esa configuración dentro de una función `unified()` de `@astrojs/markdown-remark` | Usar `markdown: { processor: unified({ rehypePlugins: [...] }) }` |
| Build falla en Vercel: `new URL(..., undefined)` | Variables de `.env` no viajan al repositorio ni a Vercel automáticamente | Se eliminó `.env`; los valores se centralizaron como constantes de código en `src/lib/site.ts` |
| `Unexpected token` en compilación | Un `import` se pegó accidentalmente dentro de una expresión (argumento de `new URL()`), en vez de al inicio del archivo | Los `import` solo pueden ir al inicio del bloque frontmatter (`---`), nunca dentro de otra expresión |

---

## 9. Pendientes / roadmap sugerido

- Optimización automática de imágenes con `astro:assets` (compresión, formatos modernos, `srcset`).
- Integración de analítica (ej. Google Analytics o alternativa privacy-friendly).
- Ampliar el set de autores conforme se sumen colaboradores.
- Revisar periódicamente que todas las notas tengan imágenes reales subidas a `public/images/notas/` (evita imágenes rotas en Open Graph al compartir en redes).