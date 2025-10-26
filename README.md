This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## About This Project

This workshop was developed as part of a technical assessment, completed in approximately 4 hours. The project demonstrates font family exploration and visualization capabilities using Next.js.

## Technologies & Libraries

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework for styling
- **next-themes** - Dark mode support for Next.js
- **class-variance-authority (CVA)** - Build type-safe variant CSS classes
- **TypeScript** - Type safety and better developer experience

## Development Tools

This project was developed using **Cursor** IDE with **Claude Code** AI assistance, leveraging AI-powered coding to accelerate development and improve code quality.

## Project Structure

```
src/
├── app/
│   ├── _components/          # Shared components (Header, ThemeSwitcher, SVGRenderer, Pagination)
│   ├── _lib/                 # Utility functions and helpers
│   ├── _types/               # TypeScript type definitions
│   ├── (home)/               # Home page route group
│   │   ├── _components/      # Home-specific components (Card, CardList)
│   │   └── page.tsx
│   ├── (fontFamily)/         # Font detail pages route group
│   │   └── font/[id]/
│   │       ├── _components/  # Font-specific components (Visualizer, FamilyInfo)
│   │       └── page.tsx
│   ├── api/                  # API routes
│   │   ├── families/         # Font families API
│   │   └── familyDetails/    # Font details API
│   ├── globals.css           # Global styles with Tailwind
│   └── layout.tsx            # Root layout with theme provider
└── data/                     # JSON data files for fonts
    ├── fontDetails.json
    ├── fontFamiliesPage1.json
    └── fontFamiliesPage2.json
```

The project uses Next.js App Router with:

- **Route Groups** `(home)` and `(fontFamily)` for organization without affecting URLs
- **Dynamic Routes** `[id]` for individual font pages, but not used because of mock
- **Shared Components** in `_components` folders
- **TypeScript Types** organized in `_types` folder
- **Utility Functions** in `_lib` folder

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Commands

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Note on Data

This project uses mock data stored in JSON files (`src/data/`). The dynamic route functionality is implemented but not actively used due to the mock data structure.
