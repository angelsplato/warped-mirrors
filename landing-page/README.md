# warpedmirrors landing page

A modern, responsive marketing site for warpedmirrors. Built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Mission

We do the boring groundwork that enables legacy organisations to compete in the age of AI. Our first product is a skills server for the South African market.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your computer:

- **Node.js** (version 18.0 or higher)
  - Download from: https://nodejs.org/
  - To check if installed, run: `node --version`
- **npm** (comes with Node.js)
  - To check version, run: `npm --version`
- **Git** (required for cloning the repository)
  - Download from: https://git-scm.com/
  - To check if installed, run: `git --version`

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

First, clone the project repository to your local machine. Open your terminal/command prompt and run:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the actual Git repository URL provided by your supervisor.

**Example:**
```bash
git clone https://github.com/warped-mirrors/landing-page.git
```

### 2. Navigate to the Project Directory

Change into the project directory:

```bash
cd landing-page
```

Or if you're already in the parent folder:

```bash
cd warped-mirrors/landing-page
```

### 3. Install Dependencies

Install all required packages:

```bash
npm install
```

This will download all the necessary dependencies listed in `package.json`. It may take a few minutes.

### 4. Run the Development Server

Start the local development server:

```bash
npm run dev
```

The website will be available at:
- **Local**: http://localhost:5173 (or another port if 5173 is in use)

The terminal will show you the exact URL. The development server includes:
- ✅ Hot Module Replacement (HMR) - changes appear instantly
- ✅ Live reloading - the page updates automatically when you save files
- ✅ Error overlay - see errors directly in the browser

### 5. Open in Browser

Open your web browser and go to the URL shown in the terminal (usually `http://localhost:5173`).

You should now see the Warped Mirrors landing page running!

## 📁 Project Structure

```
landing-page/
├── public/               # Static assets
│   └── _redirects       # Deployment redirects
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Header.tsx  # Navigation header
│   │   ├── Hero.tsx    # Hero section
│   │   ├── Features.tsx # Products section
│   │   ├── HowItWorks.tsx # Industries section
│   │   ├── CTA.tsx     # Call-to-action section
│   │   └── Footer.tsx  # Footer section
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite build configuration
└── README.md           # This file
```

## 🛠️ Available Commands

Here are the main commands you'll use:

### Development

```bash
npm run dev
```
Starts the development server with hot reloading.

### Build for Production

```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```
Preview the production build locally before deploying.

### Linting

```bash
npm run lint
```
Check code for errors and style issues.

### Type Checking

```bash
npx tsc
```
Run TypeScript type checking without building.

## 🎨 Key Technologies

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Icon library

## 🌈 Design System

The website uses a **zinc color palette** with the following theme:

- **Background**: zinc-950 (darkest black)
- **Surface**: zinc-900
- **Borders**: zinc-800
- **Text**: white, zinc-400, zinc-500
- **Font**: Inter (via Google Fonts)

All components follow a consistent design language with lowercase text styling.

## 📦 Adding New Components

To add a new shadcn/ui component:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
```

This will add the component to `src/components/ui/`.

## 🚢 Deployment on Vercel

Import the GitHub repository into Vercel and configure the project with:

- **Root Directory:** `landing-page`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm ci` (Vercel's default is also suitable)

`vercel.json` includes these build settings and an SPA fallback, so direct requests to client-side paths serve `index.html`.

After the first deployment, add `warpedmirrors.com` and `www.warpedmirrors.com` in Vercel's domain settings. Point the domain's DNS records to Vercel as directed in the dashboard, then choose one canonical domain and redirect the other to it. The canonical metadata currently uses `https://warpedmirrors.com`.

## 🐛 Troubleshooting

### Port Already in Use

If you see "Port 5173 is in use", Vite will automatically try the next available port (5174, 5175, etc.). Check the terminal output for the actual URL.

### Dependencies Installation Fails

Try clearing the npm cache:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Run type checking to see detailed errors:
```bash
npx tsc --noEmit
```

### Build Fails

Clear build cache and try again:
```bash
rm -rf dist
npm run build
```

### Styles Not Updating

If Tailwind styles aren't updating, restart the dev server:
```bash
# Stop the server (Ctrl+C)
npm run dev
```

## 📝 Making Changes

### To Update Content

1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **Products**: Edit `src/components/Features.tsx`
3. **Industries**: Edit `src/components/HowItWorks.tsx`
4. **Header Navigation**: Edit `src/components/Header.tsx`
5. **Footer**: Edit `src/components/Footer.tsx`

### To Update Styles

- Global styles: `src/index.css`
- Component-specific: Use Tailwind classes directly in TSX files
- Theme colors: `tailwind.config.js`

### To Add New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation links in `Header.tsx` if needed

## ✅ Before Pushing Changes

Always run these checks:

```bash
# 1. Check for TypeScript errors
npx tsc --noEmit

# 2. Run linter
npm run lint

# 3. Test production build
npm run build
npm run preview
```

## 📚 Learning Resources

- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
- **Vite**: https://vitejs.dev/guide/

## 🆘 Getting Help

If you run into issues:

1. Check this README first
2. Search for error messages online
3. Check the official documentation for the technology causing issues
4. Ask your supervisor or team lead

## 📄 License

© 2025 Warped Mirrors™. All rights reserved.

---

**Happy coding! 🚀**

For questions or issues, contact the development team.
