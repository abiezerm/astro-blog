# AGENTS.md - Developer Guidelines for astro-blog

## Project Overview

This is an Astro blog project using:
- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: Astro Content Collections with MDX
- **Language**: TypeScript (.ts, .astro files)

---

## Commands

### Development
```bash
npm run dev        # Start development server (astro dev)
npm run build      # Build for production (astro build)
npm run preview    # Preview production build (astro preview)
npm run astro      # Run Astro CLI commands
```

### Testing
- **No test framework configured** - Do not add tests unless explicitly requested

### Linting
- **No linter configured** - Do not add linting unless explicitly requested

### Type Checking
- Use `npx astro check` to type-check the project

---

## Code Style Guidelines

### General
- **Indentation**: 4 spaces (not tabs)
- **Quotes**: Single quotes for strings
- **Semicolons**: Use semicolons at end of statements
- **Trailing commas**: Optional in multi-line objects/arrays

### TypeScript
- Always define explicit return types for functions
- Use `interface` for object shapes, `type` for unions/intersections
- Avoid `any` - use `unknown` when type is truly unknown
- Prefer `const` over `let` for immutable bindings

### Astro Components (.astro)
- Use code fence (---) at top and between frontmatter/script
- Frontmatter: TypeScript logic that runs at build time
- Template: HTML with embedded expressions `{}`
- Scripts: Client-side JavaScript (rarely needed)
- Props interface: Define in frontmatter with `interface Props`

Example:
```astro
---
import { SomeComponent } from '@components/SomeComponent';
import { someUtil } from '@utils/someUtil';

interface Props {
    title: string;
    date?: Date;
}

const { title, date = new Date() } = Astro.props;
const formatted = someUtil(title);
---

<div class="some-class">
    <h1>{formatted}</h1>
    <SomeComponent date={date} />
</div>
```

### Imports
- Use path aliases when available:
  - `@components/*` for components
  - `@utils/*` for utilities
  - `@layouts/*` for layouts
- Group imports: external, internal (components/utils), then local assets

### Content Collections
- Define schemas in `src/content/config.ts` using Zod
- Use `defineCollection()` with type: 'content' or 'data'
- Use `reference()` for relations between collections

Example:
```typescript
import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: reference('author'),
    })
});
```

### Tailwind CSS
- Use utility classes directly in templates
- Follow Tailwind v4 conventions
- Dark mode classes: `dark:bg-gray-900`

### Error Handling
- Use try/catch for operations that may fail
- Return appropriate error states rather than throwing in non-critical code
- Use Astro's built-in error pages for 404, 500, etc.

### File Naming
- Components: PascalCase (e.g., `BlogPost.astro`, `TypedBlogPost.astro`)
- Utils/Config: camelCase (e.g., `formatter.ts`, `site-config.ts`)
- Pages: kebab-case (e.g., `[slug].astro`, `index.astro`)
- Content: kebab-case for slugs, PascalCase for collections

### Content Structure
- Blog posts: `src/content/blog/*.mdx`
- Authors: `src/content/author/*.json`
- Use frontmatter for post metadata

---

## Architecture Notes

### Routes
- Pages in `src/pages/` directory
- Dynamic routes use `[slug].astro` or `[param].astro` syntax
- Nested routes via directories (e.g., `src/pages/blogs/`)

### Layouts
- Use layouts in `src/layouts/` for consistent page structure
- MainLayout: base HTML structure with head, body
- BlogLayout: extends MainLayout for blog posts

### Transitions
- Uses Astro's `ClientRouter` for view transitions
- Add `transition:name` attributes for animated element persistence

---

## What NOT To Do

- Do NOT add ESLint, Prettier, or other linting tools
- Do NOT add testing frameworks (Vitest, Playwright, etc.)
- Do NOT change the indentation style from 4 spaces
- Do NOT use JavaScript - use TypeScript only
- Do NOT add new dependencies without explicit approval

---

## When In Doubt

- Follow existing code patterns in the repository
- Look at `src/components/` and `src/layouts/` for component patterns
- Look at `src/content/config.ts` for schema patterns
