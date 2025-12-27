---
description: 'Mandatory workflows for AI agents: pre-implementation checks (rules review, MCP server discovery), post-implementation documentation (CHANGELOG, rules, README), security guidelines, and architecture standards for this Next.js personal site.'
alwaysApply: true
---

# Project Workflow Rules for Relentless Rigor

This rule establishes mandatory workflows and guidelines for AI agents working on this Next.js personal site project. All agents MUST follow these rules before, during, and after any implementation, fix, or update.

## Pre-Implementation Workflow (MANDATORY)

Before starting any implementation, fix, or update, agents MUST complete the following checks:

### 1. Rule Reference Check

- Read and review all relevant rules in `.cursor/rules/`
- Check if existing rules provide guidance for the current task
- Follow established patterns and conventions from the rules
- If a rule conflicts with the task, document the conflict and propose a resolution

### 2. MCP Server Check

- Use `list_mcp_resources` to discover available MCP servers
- Evaluate if any MCP servers can assist with the task:
  - Next.js devtools for Next.js-specific tasks (routing, errors, build status)
  - Browser automation for testing and verification
  - Any other relevant MCP tools that could improve implementation quality
- Use appropriate MCP tools when available instead of manual implementations
- Prefer MCP tools over manual approaches when they provide better accuracy or efficiency

## Post-Implementation Documentation (MANDATORY)

After completing any implementation, fix, or update, agents MUST:

### 1. CHANGELOG.md Update

- **ALWAYS** add an entry to `CHANGELOG.md` following the current format:
  - Date header: `## YYYY-MM-DD` (use today's date)
  - Bullet point describing the change
  - Use clear, concise descriptions
  - Group multiple related changes under the same date
  - Place new entries at the top of the file (after the "# Changelog" header)

### 2. Rules Review

- Check if the change requires updating rules in `.cursor/rules/`:
  - New patterns or conventions established
  - Architecture changes that should be documented
  - Workflow improvements discovered
  - New dependencies or technologies introduced
- If updates are needed, create a new rule or update existing rules

### 3. README.md Review

- Check if the change requires updating `README.md`:
  - New dependencies or setup requirements
  - Configuration changes that affect setup
  - Usage instructions that have changed
  - New features that should be documented
- Update `README.md` if any of the above apply

## Security Guidelines

**CRITICAL**: This repository is public. Never include sensitive data in any public files.

### Prohibited in rules, `README.md`, or `CHANGELOG.md`:

- API keys, tokens, or secrets
- Personal information (email addresses, phone numbers, etc.)
- Internal URLs or endpoints
- Database credentials or connection strings
- Environment variable values (only variable names are acceptable)
- Authentication credentials
- Private keys or certificates
- Any information that could pose a security risk

### Best Practices:

- Reference environment variables by name only (e.g., `NEXT_PUBLIC_SITE_URL`)
- Use placeholder values in examples (e.g., `https://example.com`)
- Never commit actual credentials or secrets
- Document required environment variables without revealing their values

## Architecture Rules

This project follows specific architectural patterns that MUST be maintained:

### Framework & Runtime

- **Next.js 16**: Use App Router conventions exclusively (not Pages Router)
- **React 19**: Follow React 19 best practices and patterns
- **TypeScript**: All new code must be TypeScript with strict type checking enabled
- **Node.js**: Ensure compatibility with the project's Node.js version requirements

### Project Structure

- **Path Aliases**: Always use `@/*` for imports from `src/` directory (configured in `tsconfig.json`)
- **Components**: Place reusable components in `src/components/`
- **Pages**: Create pages in `src/app/` following Next.js App Router structure
- **Utilities**: Place utility functions in `src/lib/`
- **Styles**: Place global styles in `src/styles/`
- **Images**: Place static images in `src/images/`

### Styling

- **Tailwind CSS v4**: Use Tailwind CSS v4 utilities for all styling
- **Typography**: Use `@tailwindcss/typography` for prose content (articles, blog posts)
- **Dark Mode**: Support dark mode via `next-themes` (already configured)
- **Responsive Design**: Ensure all components are mobile-responsive

### MDX & Content

- **Articles**: Place MDX articles in `src/app/articles/` as MDX files
- **MDX Configuration**: Maintain MDX configuration in `next.config.mjs`
- **Plugins**: Use `remark-gfm` for GitHub Flavored Markdown and `@mapbox/rehype-prism` for syntax highlighting

### Build Configuration

- **Webpack**: Use `--webpack` flag for dev and build scripts (required due to MDX plugin limitations)
- **Turbopack**: Do NOT use Turbopack (incompatible with current MDX setup)
- **Output Tracing**: Maintain `outputFileTracingIncludes` configuration for Vercel deployment

### Component Patterns

- **Server Components**: Prefer Server Components by default
- **Client Components**: Use `'use client'` directive only when necessary (interactivity, hooks, browser APIs)
- **Layouts**: Use Next.js layout components for shared UI
- **Metadata**: Use Next.js metadata API for SEO and social sharing

## Code Quality Standards

### TypeScript

- Maintain strict type checking compliance
- Use proper type definitions for all functions and components
- Avoid `any` types; use `unknown` or proper types instead
- Leverage TypeScript's type inference where appropriate

### Code Style

- Follow existing code style and patterns in the codebase
- Use Prettier for formatting (already configured in `prettier.config.js`)
- Maintain consistent naming conventions:
  - Components: PascalCase (e.g., `ArticleLayout.tsx`)
  - Utilities: camelCase (e.g., `formatDate.ts`)
  - Files: Match the export (component files match component names)

### React Best Practices

- Follow React 19 best practices
- Use functional components exclusively
- Prefer composition over inheritance
- Keep components focused and single-purpose
- Use proper key props for lists
- Handle loading and error states appropriately

### Performance

- Optimize images using Next.js `Image` component
- Use dynamic imports for code splitting when appropriate
- Minimize client-side JavaScript when possible
- Leverage Next.js caching strategies

### Testing & Verification

- Verify changes work in development mode
- Check for console errors and warnings
- Ensure dark mode compatibility
- Test responsive design on multiple screen sizes
- Use browser automation or Next.js devtools when available for verification

## Additional Guidelines

### Dependencies

- Check `package.json` before adding new dependencies
- Prefer well-maintained, popular packages
- Keep dependencies up to date
- Document why a dependency is needed if it's not obvious

### Git & Version Control

- Write clear, descriptive commit messages
- Keep commits focused and atomic
- Do not commit sensitive data or build artifacts
- Follow the project's branching strategy if one exists

### Documentation

- Write self-documenting code with clear variable and function names
- Add comments for complex logic or non-obvious decisions
- Keep documentation up to date with code changes
- Use JSDoc comments for public APIs when appropriate

---

**Remember**: These rules exist to ensure consistency, security, and maintainability. When in doubt, prioritize security and following established patterns over quick fixes.
