# Development Guide

## Quick Start

```sh
npm install
npm run dev
```

Visit `http://localhost:8080` to see the app.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code for linting errors |
| `npm run lint:fix` | Auto-fix linting errors |
| `npm run type-check` | Check TypeScript types without building |

## Project Structure

```
revastra/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Feature components
│   ├── pages/          # Route pages
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and helpers
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## Key Technologies

- **React 18**: UI library with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **React Router**: Client-side routing
- **TanStack Query**: Data fetching and caching
- **React Hook Form**: Form handling
- **Zod**: Schema validation

## Adding New Pages

1. Create a new file in `src/pages/`
2. Add the route in `src/App.tsx`
3. Import and use components from `src/components/`

## Styling Guidelines

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Use shadcn/ui components for consistency
- Keep custom CSS minimal

## Best Practices

- Write TypeScript, not JavaScript
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper semantic HTML
- Ensure accessibility (ARIA labels, keyboard navigation)
- Test on multiple screen sizes

## Troubleshooting

### Port already in use
Change the port in `vite.config.ts` or kill the process using port 8080.

### Build errors
Run `npm run type-check` to see TypeScript errors.

### Dependency issues
Delete `node_modules` and `package-lock.json`, then run `npm install` again.

## Need Help?

Check the [README.md](./README.md) or open an issue on GitHub.
