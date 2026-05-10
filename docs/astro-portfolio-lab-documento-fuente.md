# Astro Portfolio Lab — Documento Fuente del Proyecto

## 1. Propósito del proyecto

`astro-portfolio-lab` es un proyecto práctico de aprendizaje y construcción profesional con Astro, TypeScript estricto y Tailwind CSS.

El objetivo principal es desarrollar una base sólida para construir sitios modernos, rápidos, mantenibles y optimizados para SEO, aplicando buenas prácticas reales desde el inicio.

Durante el curso/proyecto se construirán tres entregables principales:

1. **Portfolio Frontend**
2. **Portfolio RPA**
3. **Landing Page profesional**

El proyecto no debe tratarse como una simple práctica aislada, sino como una base real para crear piezas que puedan formar parte de un portfolio profesional.

---

## 2. Stack técnico definido

El stack principal del proyecto será:

```txt
Astro
TypeScript strict
Tailwind CSS
Git
GitHub
Netlify
```

Además, se contempla el uso puntual de:

```txt
React
Headless UI
Content Collections
SEO component propio
Sitemap
Robots.txt
```

React no será utilizado como base de toda la aplicación. Solo se incorporará cuando la interactividad lo justifique, siguiendo el enfoque de islands architecture de Astro.

---

## 3. Filosofía técnica del proyecto

El proyecto debe priorizar:

- HTML semántico.
- JavaScript mínimo en cliente.
- Componentes simples y reutilizables.
- TypeScript estricto.
- Accesibilidad básica desde el inicio.
- SEO técnico bien implementado.
- Performance.
- Buenas prácticas de estructura.
- Diseño responsive.
- Deploy real en Netlify.
- Código fácil de mantener y auditar.

La regla general será:

> Usar Astro puro siempre que sea suficiente. Usar React solo cuando haya una necesidad real de interactividad.

---

## 4. Objetivos de aprendizaje

Al finalizar el curso/proyecto, se espera dominar:

- Creación de proyectos Astro.
- Estructura profesional de carpetas.
- Componentes `.astro`.
- Props tipadas.
- Layouts.
- Slots.
- Rutas estáticas.
- Rutas dinámicas.
- Tailwind CSS en Astro.
- Dark mode.
- Sistema visual propio.
- SEO técnico.
- Content Collections.
- Markdown/MDX para contenido.
- Blog técnico.
- Portfolio profesional.
- Landing page orientada a conversión.
- Deploy en Netlify.
- Buen flujo con Git y GitHub.

---

## 5. Entregables principales

### 5.1 Portfolio Frontend

Sitio orientado a mostrar habilidades como desarrollador frontend.

Debe destacar:

- Astro.
- React.
- TypeScript.
- Tailwind CSS.
- Diseño responsive.
- SEO.
- Performance.
- Componentes reutilizables.
- Proyectos frontend.
- Landing pages.
- Integraciones con APIs.

Páginas previstas:

```txt
/
 /about
 /projects
 /projects/[slug]
 /contact
```

Secciones previstas:

- Hero.
- Stack técnico.
- Proyectos destacados.
- Experiencia o enfoque profesional.
- Servicios frontend.
- CTA.
- Contacto.

---

### 5.2 Portfolio RPA

Sitio orientado a mostrar experiencia en automatización de procesos.

Debe destacar:

- Power Automate Desktop.
- Blue Prism, si corresponde.
- Power Platform.
- Automatizaciones web.
- Automatizaciones desktop.
- Procesamiento de Excel.
- Manejo de colas.
- Logging.
- Arquitecturas Dispatcher/Performer.
- Buenas prácticas unattended.
- Casos de uso.
- Blog técnico.

Páginas previstas:

```txt
/
 /cases
 /cases/[slug]
 /blog
 /blog/[slug]
 /tools
 /contact
```

Ideas de artículos técnicos:

```txt
Cómo diseñar logs estructurados en Power Automate Desktop
Dispatcher/Performer aplicado a Power Automate Desktop
Manejo de colas de trabajo en PAD
Cómo automatizar procesos web con iframes y shadow DOM
Estrategias para automatizar archivos Excel grandes
Buenas prácticas para flujos unattended
```

---

### 5.3 Landing Page profesional

Landing page orientada a conversión.

Tema recomendado:

```txt
Automatización RPA y desarrollo web para optimizar procesos de negocio
```

Secciones previstas:

```txt
Hero
Problema
Solución
Beneficios
Servicios
Proceso de trabajo
Casos de uso
FAQ
CTA final
Contacto
```

Objetivos de la landing:

- Presentar una propuesta de valor clara.
- Explicar servicios.
- Generar confianza.
- Llevar al usuario a una acción concreta.
- Estar optimizada para SEO.
- Tener buena performance.
- Ser responsive.

---

## 6. Identidad visual definida

El estilo visual será:

```txt
Tecnológico
Moderno
Sobrio
Profesional
Oscuro desde el inicio
Con acentos verde agua, cyan y azulados
```

Características visuales:

- Fondo oscuro azul profundo.
- Gradientes suaves.
- Cards con bordes sutiles.
- Acentos en verde agua/cyan.
- Tipografía moderna.
- Buen espacio negativo.
- Componentes limpios.
- Estilo profesional, no recargado.

Paleta inicial propuesta mediante CSS variables:

```css
:root {
  color-scheme: dark;

  --color-background: #020617;
  --color-surface: #0f172a;
  --color-surface-soft: #111827;
  --color-border: #1e293b;
  --color-text: #e5f0ff;
  --color-muted: #94a3b8;
  --color-primary: #2dd4bf;
  --color-primary-hover: #5eead4;
  --color-secondary: #38bdf8;
}
```

---

## 7. Estructura inicial del proyecto

Estructura base definida:

```txt
src/
  components/
    layout/
    ui/
    sections/
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    frontend.astro
    rpa.astro
    landing.astro
    contact.astro
  styles/
    global.css
```

Estructura futura esperada:

```txt
src/
  components/
    layout/
    ui/
    sections/
    seo/
    interactive/
  content/
    projects/
    rpa-cases/
    rpa-posts/
    services/
  data/
  layouts/
  lib/
  pages/
  styles/
  types/
```

---

## 8. Convenciones de carpetas

### `components/layout`

Componentes estructurales del sitio.

Ejemplos:

```txt
MainHeader.astro
MainFooter.astro
MobileMenu.astro
```

### `components/ui`

Componentes reutilizables y genéricos.

Ejemplos:

```txt
ButtonLink.astro
Badge.astro
Card.astro
Container.astro
IconLink.astro
```

### `components/sections`

Secciones grandes de página.

Ejemplos:

```txt
HeroSection.astro
ProjectsSection.astro
CTASection.astro
BenefitsSection.astro
```

### `components/seo`

Componentes relacionados con SEO y metadata.

Ejemplos:

```txt
SEO.astro
OpenGraphImage.astro
```

### `components/interactive`

Componentes que requieran React u otra integración interactiva.

Ejemplos:

```txt
ProjectFilters.tsx
MobileMenu.tsx
Tabs.tsx
Modal.tsx
```

---

## 9. Páginas iniciales

Las primeras rutas del proyecto serán:

```txt
/
 /frontend
 /rpa
 /landing
 /contact
```

Cada página deberá usar `BaseLayout.astro`.

Ejemplo conceptual:

```astro
<BaseLayout
  title="Título de la página"
  description="Descripción SEO de la página"
>
  <section>
    Contenido de la página
  </section>
</BaseLayout>
```

---

## 10. Layout base

El layout base debe encargarse de:

- Importar estilos globales.
- Definir `<html lang="es">`.
- Definir metadata básica.
- Renderizar `MainHeader`.
- Renderizar contenido con `<slot />`.
- Renderizar `MainFooter`.

Responsabilidades iniciales:

```txt
BaseLayout.astro
- Estructura HTML base
- Meta description
- Title
- Header
- Footer
- Slot principal
```

Más adelante se incorporará o delegará SEO avanzado en un componente `SEO.astro`.

---

## 11. Componentes iniciales definidos

Componentes creados o previstos en la Clase 1:

```txt
Container.astro
Badge.astro
ButtonLink.astro
MainHeader.astro
MainFooter.astro
BaseLayout.astro
```

### `Container.astro`

Responsabilidad:

- Controlar ancho máximo.
- Aplicar padding horizontal.
- Centrar contenido.

### `Badge.astro`

Responsabilidad:

- Mostrar etiquetas visuales pequeñas.
- Usarse en hero, cards, proyectos y artículos.

### `ButtonLink.astro`

Responsabilidad:

- Renderizar enlaces con aspecto de botón.
- Soportar variantes visuales.

Variantes iniciales:

```txt
primary
secondary
```

---

## 12. TypeScript

El proyecto debe usar TypeScript estricto.

Configuración esperada:

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

Reglas del proyecto:

- No usar `any` salvo justificación clara.
- Tipar props de componentes.
- Usar `as const` cuando corresponda para datos estáticos.
- Crear tipos compartidos en `src/types` cuando el modelo sea reutilizable.
- No duplicar interfaces si pueden centralizarse.
- Mantener tipos simples al inicio.

---

## 13. Tailwind CSS

El proyecto utilizará Tailwind CSS.

Se priorizará el flujo moderno con:

```txt
tailwindcss
@tailwindcss/vite
```

Configuración esperada en `astro.config.mjs`:

```js
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Importación esperada en `src/styles/global.css`:

```css
@import "tailwindcss";
```

---

## 14. SEO

El SEO será parte central del proyecto.

Se implementará un componente propio:

```txt
SEO.astro
```

Props sugeridas:

```ts
interface Props {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
}
```

Aspectos SEO a cubrir:

- Title único por página.
- Meta description única.
- Canonical URL.
- Open Graph.
- Twitter Cards.
- Sitemap.
- Robots.txt.
- HTML semántico.
- Jerarquía correcta de headings.
- Imágenes optimizadas.
- Performance.
- Accesibilidad.

---

## 15. Content Collections

Se usarán Content Collections para modelar contenido estructurado.

Colecciones previstas:

```txt
projects
rpa-cases
rpa-posts
services
```

### `projects`

Usado para proyectos frontend, fullstack, landing pages o RPA.

Campos esperados:

```ts
{
  title: string;
  description: string;
  stack: string[];
  image: string;
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean;
  type: 'frontend' | 'fullstack' | 'rpa' | 'landing';
  status: 'planned' | 'in-progress' | 'completed';
  publishedAt: Date;
}
```

### `rpa-posts`

Usado para blog técnico RPA.

Campos esperados:

```ts
{
  title: string;
  description: string;
  publishedAt: Date;
  tags: string[];
  tools: string[];
  difficulty: 'basic' | 'intermediate' | 'advanced';
}
```

### `rpa-cases`

Usado para casos de uso RPA.

Campos esperados:

```ts
{
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  tools: string[];
  featured: boolean;
}
```

### `services`

Usado para servicios ofrecidos.

Campos esperados:

```ts
{
  title: string;
  description: string;
  benefits: string[];
  targetAudience: string[];
}
```

---

## 16. React e interactividad

React se podrá incorporar para componentes que realmente necesiten estado o interacción.

Casos válidos:

- Filtros de proyectos.
- Tabs.
- Modales.
- Menú mobile avanzado.
- Buscador de posts.
- Toggle visual.
- Componentes con estado local.

Casos donde NO conviene usar React:

- Cards estáticas.
- Botones simples.
- Layouts.
- Secciones informativas.
- Badges.
- Listados renderizables en servidor.

Regla:

> Si Astro puede resolverlo sin JavaScript en cliente, se prioriza Astro.

---

## 17. Headless UI

Se podrá usar Headless UI si aporta valor real.

Casos recomendados:

```txt
Dialog / Modal
Popover
Tabs
Disclosure / FAQ
Menu mobile
```

No se usará para componentes simples que puedan resolverse con Astro y Tailwind.

---

## 18. Git y GitHub

Repositorio sugerido:

```txt
astro-portfolio-lab
```

Descripción sugerida:

```txt
Practical Astro project for building frontend and RPA portfolios with TypeScript, Tailwind CSS and SEO best practices.
```

Convenciones:

- Commits en inglés.
- Commits pequeños y descriptivos.
- Un commit por avance lógico.
- No mezclar refactors grandes con nuevas funcionalidades.

Ejemplos:

```bash
git commit -m "chore: initialize Astro portfolio lab"
git commit -m "feat: customize initial home page"
git commit -m "feat: add base layout and dark theme tokens"
git commit -m "feat: create reusable UI components"
git commit -m "feat: add project content collection"
git commit -m "feat: build frontend portfolio home page"
git commit -m "feat: add RPA blog collection"
git commit -m "feat: implement SEO component"
git commit -m "chore: configure Netlify deployment"
```

---

## 19. Deploy

El entorno de pruebas será Netlify.

Objetivos:

- Publicar versiones de prueba.
- Validar build real.
- Revisar performance.
- Revisar SEO.
- Revisar rutas.
- Preparar futuro dominio propio.

Configuración esperada:

```txt
Build command: astro build
Publish directory: dist
```

Más adelante se evaluará dominio propio.

---

## 20. Ritmo de estudio recomendado

Dedicación semanal:

```txt
4 a 6 horas
```

Distribución recomendada:

```txt
2 bloques largos de 2 horas
1 bloque corto de 45 a 60 minutos
```

Uso recomendado de horarios:

```txt
Mañana:
- Conceptos nuevos
- Arquitectura
- Astro
- TypeScript
- SEO
- Content Collections

Noche:
- Estilos
- Refactor
- Commits
- Documentación
- Ajustes visuales
```

Si solo se puede elegir un horario, se recomienda estudiar por la mañana.

---

## 21. Roadmap del curso/proyecto

### Fase 0 — Preparación profesional del proyecto

Objetivo:

- Crear proyecto.
- Configurar TypeScript.
- Configurar Tailwind.
- Configurar Git.
- Definir estructura inicial.

Duración:

```txt
1 bloque largo
```

---

### Fase 1 — Fundamentos reales de Astro

Objetivo:

- Entender páginas, layouts, componentes, props y slots.

Duración:

```txt
1 semana
```

---

### Fase 2 — Sistema visual tecnológico con Tailwind

Objetivo:

- Crear base visual oscura, moderna y reutilizable.

Duración:

```txt
1 semana
```

---

### Fase 3 — SEO base y estructura profesional

Objetivo:

- Crear sistema SEO reutilizable.

Duración:

```txt
1 semana
```

---

### Fase 4 — Content Collections

Objetivo:

- Modelar contenido tipado para proyectos, servicios, casos RPA y blog.

Duración:

```txt
1 semana
```

---

### Fase 5 — Portfolio Frontend

Objetivo:

- Construir y publicar el portfolio frontend.

Duración:

```txt
1 a 1.5 semanas
```

---

### Fase 6 — Portfolio RPA con blog técnico

Objetivo:

- Construir y publicar el portfolio RPA.

Duración:

```txt
1.5 semanas
```

---

### Fase 7 — Landing Page profesional

Objetivo:

- Crear landing profesional optimizada para conversión y SEO.

Duración:

```txt
1 semana
```

---

### Fase 8 — Interactividad con React y Headless UI

Objetivo:

- Agregar interactividad controlada.

Duración:

```txt
1 semana
```

---

### Fase 9 — Deploy y revisión final

Objetivo:

- Publicar, revisar y preparar los proyectos para uso profesional.

Duración:

```txt
1 semana
```

---

## 22. Checklist de calidad

Antes de considerar terminado cada entregable:

```txt
[ ] Usa TypeScript estricto
[ ] No usa any innecesario
[ ] Tiene HTML semántico
[ ] Tiene title único
[ ] Tiene meta description única
[ ] Tiene canonical si corresponde
[ ] Tiene Open Graph
[ ] Tiene estructura responsive
[ ] Tiene buena jerarquía de headings
[ ] Tiene navegación clara
[ ] Tiene estados hover/focus
[ ] Tiene contraste suficiente
[ ] No carga JavaScript innecesario
[ ] El build pasa correctamente
[ ] Está versionado en Git
[ ] Está publicado en Netlify
[ ] Tiene README actualizado
```

---

## 23. Checklist de la Clase 1

Al finalizar la clase 1, el proyecto debe tener:

```txt
[ ] Proyecto Astro creado
[ ] TypeScript strict configurado
[ ] Tailwind CSS instalado con @tailwindcss/vite
[ ] global.css creado
[ ] BaseLayout creado
[ ] Header y Footer creados
[ ] Componentes Container, Badge y ButtonLink creados
[ ] Home funcionando
[ ] Páginas /frontend, /rpa, /landing y /contact funcionando
[ ] npm run build sin errores
[ ] Primer commit realizado
[ ] Repositorio creado en GitHub
```

---

## 24. Primeros commits sugeridos

```bash
git commit -m "chore: initialize Astro portfolio lab"
git commit -m "feat: customize initial home page"
```

---

## 25. Principios de trabajo durante el curso

Durante todo el proyecto:

- No avanzar sin entender la intención del código.
- Priorizar código mantenible.
- Evitar sobreingeniería prematura.
- Crear componentes cuando haya reutilización clara.
- No llenar el proyecto de abstracciones innecesarias.
- Validar con `npm run build`.
- Hacer commits frecuentes.
- Documentar decisiones importantes.
- Mantener foco en proyectos publicables.

---

## 26. Decisiones iniciales confirmadas

```txt
Proyecto: astro-portfolio-lab
Idioma principal: Español
Deploy inicial: Netlify
Dominio propio: más adelante
Modo visual: dark mode desde el inicio
Estilo: tecnológico, moderno, sobrio
Colores destacados: verde agua, cyan, azules
CSS: Tailwind CSS
TypeScript: strict
React: solo para interactividad justificada
Headless UI: opcional, para componentes interactivos complejos
GitHub: sí
Contenido: proyectos frontend, proyectos RPA, blog RPA, landing page
```

---

## 27. Nota final

Este documento debe actualizarse a medida que el proyecto evolucione.

Puede guardarse en el repositorio como:

```txt
docs/project-source.md
```

También puede servir como contexto para asistentes de IA o como documentación interna del proyecto.
