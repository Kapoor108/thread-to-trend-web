# ReVastra - From Trash to Trend

A sustainable fashion platform that transforms forgotten clothes into trendy, eco-friendly clothing. ReVastra connects users with tailors, enables outfit customization, and promotes sustainable fashion through donation and upcycling.

## Features

- 🎨 Custom outfit design and visualization
- 🛍️ Shop sustainable upcycled fashion items
- ♻️ Upcycle Studio for transforming old clothes
- 👔 Tailor Portal for professional services
- 📱 Style Feed for fashion inspiration
- 🤝 NGO Partners for clothing donations
- 📊 Personal Dashboard for tracking orders

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd revastra

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## Available Scripts

```sh
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── ui/         # shadcn/ui components
│   └── ...         # Feature components
├── pages/          # Route pages
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── main.tsx        # Application entry point
```

## Deployment

Build the project for production:

```sh
npm run build
```

The `dist/` folder contains the production-ready static files that can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.
