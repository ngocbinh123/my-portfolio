import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home-page'

// Single-page portfolio: the landing renders every section; any path falls
// back to it. basename matches Vite's `base` ('/my-portfolio/') for GitHub Pages.
const router = createBrowserRouter(
  [
    { path: '/', element: <HomePage /> },
    { path: '*', element: <HomePage /> },
  ],
  { basename: import.meta.env.BASE_URL },
)

export default router
