# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a minimal Astro blog project built with Astro v5.13.2, configured with TypeScript and using pnpm as the package manager. It's a fresh installation from the Astro minimal template.

## Essential Development Commands

### Core Development Workflow
```bash
# Install dependencies
pnpm install

# Start development server (runs on localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro [command]

# Get help with Astro CLI
pnpm astro -- --help
```

### Common Astro CLI Commands
```bash
# Add integrations or adapters
pnpm astro add [integration]

# Type check the project
pnpm astro check

# Generate types
pnpm astro sync
```

## Project Architecture

### File Structure
```
/
├── public/          # Static assets (favicon.svg)
├── src/
│   └── pages/       # File-based routing - each file becomes a route
│       └── index.astro
├── .astro/          # Generated types and build artifacts
├── astro.config.mjs # Astro configuration
├── tsconfig.json    # TypeScript configuration (extends astro/tsconfigs/strict)
└── package.json     # Dependencies and scripts
```

### Key Configuration Files

- **astro.config.mjs**: Main Astro configuration (currently minimal/default)
- **tsconfig.json**: Extends Astro's strict TypeScript config
- **package.json**: Uses ES modules (`"type": "module"`)

### Development Environment

- **Package Manager**: pnpm (lockfile: pnpm-lock.yaml)
- **TypeScript**: Configured with strict mode via Astro's preset
- **VS Code**: Configured with Astro extension recommendation
- **Build Output**: `dist/` directory (gitignored)

### Routing and Pages

- File-based routing in `src/pages/`
- `.astro` and `.md` files automatically become routes
- `src/components/` is the conventional location for reusable components
- Currently only has a minimal `index.astro` homepage

### Development Server

- Default port: 4321
- Hot reload enabled
- VS Code launch configuration provided for debugging

## Project Context

This is a minimal starter template - most advanced Astro features like content collections, integrations, or custom components haven't been implemented yet. The project is ready for expansion with additional pages, components, and Astro integrations as needed.
