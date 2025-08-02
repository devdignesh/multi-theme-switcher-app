# Multi-Theme Switcher App

A modern responsive React app with 3 beautiful themes: Minimalist, Dark, and Colorful. Built using Vite and TailwindCSS.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **Lucide Icons**
- **React Router**

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/devdignesh/multi-theme-switcher-app.git
cd multi-theme-switcher-app
npm install
npm run dev
```

## Features
- 3 Themes: Minimalist, Dark, Colorful
- Responsive layout (flex, sidebar, grid)
- Theme context with smooth transition
- Mobile-friendly sidebar toggle
- Product list using dummy data
- Lucide icon integration

## Folder Structure
- `components/` – Reusable UI components
- `contexts/` – Theme context provider
- `services/` – Fetch products api
- `pages/` – App pages
- `themes/` – Themes (theme1, theme2, theme3)
- `types/` - Types

## Environment Variables
Create a `.env` file in the root directory and add your API URL:
```bash
VITE_API_URL=""
```

## Notes
- Easily add more themes via `themes.ts`
- Built with scalability and clean UI in mind
- Fully customizable with Tailwind utility classes

## Contact
- Dignesh Hirpara (React.js Developer)
- dignesh.hirapara@gmail.com

