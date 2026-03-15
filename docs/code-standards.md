# Code Standards

## Language & Framework
- React 19 with JSX
- ES modules (`"type": "module"`)
- Vite 7 for build tooling

## File Naming
- kebab-case for JS/JSX files
- PascalCase for React component names
- Component files: `component-name.jsx`

## Code Style
- ESLint 9 with react-hooks and react-refresh plugins
- Functional components with hooks
- Named exports preferred

## Project Structure
```
src/
  components/    - Reusable UI components
  pages/         - Page-level components
  assets/        - Images, fonts, static files
  styles/        - Shared CSS
  utils/         - Utility functions
  hooks/         - Custom React hooks
```

## CSS
- Component-scoped CSS files
- BEM or simple descriptive class names
- Mobile-first responsive design
