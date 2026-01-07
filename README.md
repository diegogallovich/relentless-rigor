# Spotlight

Spotlight is a [Tailwind Plus](https://tailwindcss.com/plus) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Internationalization (i18n)

This project supports multiple languages using [next-intl](https://next-intl-docs.vercel.app/).

### Supported Locales

- `en` - English (default)
- `es` - Spanish

### URL Structure

All pages are prefixed with the locale:
- English: `https://example.com/en/articles`
- Spanish: `https://example.com/es/articles`

### File Structure

```
├── i18n.ts                          # Locale configuration
├── messages/
│   ├── en.json                      # English translations
│   └── es.json                      # Spanish translations
├── src/
│   ├── i18n/
│   │   └── request.ts               # next-intl request config
│   ├── middleware.ts                # Locale detection middleware
│   └── app/
│       └── [locale]/                # All pages under locale segment
│           └── articles/
│               └── article-slug/
│                   ├── page.en.mdx  # English article content
│                   └── page.es.mdx  # Spanish article content
```

### Adding Translations

1. **Add translation keys** to both `messages/en.json` and `messages/es.json`:

```json
{
  "myFeature": {
    "title": "My Title",
    "description": "My description"
  }
}
```

2. **Use in Server Components**:

```tsx
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const t = await getTranslations('myFeature')
  return <h1>{t('title')}</h1>
}
```

3. **Use in Client Components**:

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function Component() {
  const t = useTranslations('myFeature')
  return <h1>{t('title')}</h1>
}
```

### Adding a New Article

1. Create article folder: `src/app/[locale]/articles/my-article/`
2. Create locale-specific MDX files:
   - `page.en.mdx` for English content
   - `page.es.mdx` for Spanish content
3. Add imports to `src/lib/articles.ts`:

```typescript
import * as myArticleEn from '../app/[locale]/articles/my-article/page.en.mdx'
import * as myArticleEs from '../app/[locale]/articles/my-article/page.es.mdx'

// Add to articlesModules
const articlesModules = {
  // ... existing articles
  'my-article': {
    en: myArticleEn,
    es: myArticleEs,
  },
}
```

### Data Translation Pattern

For data files (projects, recommendations), use translation keys instead of hardcoded strings:

```typescript
// In lib file
export const items = [
  { name: 'Item', descriptionKey: 'itemKey' }
]

// In messages/en.json
{
  "items": {
    "descriptions": {
      "itemKey": "Item description in English"
    }
  }
}

// In component
const t = useTranslations('items.descriptions')
items.map(item => <p>{t(item.descriptionKey)}</p>)
```

### Testing Translations

1. Run the dev server: `npm run dev`
2. Visit `http://localhost:3000/en` for English
3. Visit `http://localhost:3000/es` for Spanish
4. Use the language dropdown in the header to switch

## Build Configuration

This project uses **Webpack** instead of Turbopack (Next.js 16's default bundler) for both development and production builds.

### Why Webpack?

Next.js 16 defaults to Turbopack, which requires all loader options to be serializable. However, our MDX configuration uses plugins (`remark-gfm` and `@mapbox/rehype-prism`) that are function-based and cannot be serialized, causing build failures with Turbopack.

By using the `--webpack` flag in our npm scripts, we:
- ✅ Maintain compatibility with all MDX plugins
- ✅ Ensure reliable builds without serialization errors
- ✅ Keep all Next.js 16 features and improvements
- ✅ Use a mature, stable bundler with proven MDX support

This is a known limitation with Turbopack and MDX plugins. Once Turbopack adds full support for non-serializable plugin options, we can revisit this decision. For now, Webpack provides the most stable development and build experience for this project.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation
- [next-intl](https://next-intl-docs.vercel.app/) - the next-intl documentation for internationalization
