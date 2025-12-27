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
