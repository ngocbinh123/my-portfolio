import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'
import ProjectsPage from './pages/projects-page'
import ContactPage from './pages/contact-page'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'projects', element: <ProjectsPage /> },
        { path: 'contact', element: <ContactPage /> },
      ],
    },
  ],
  // Match React Router's basename to Vite's `base` ('/my-portfolio/') so
  // routes resolve correctly both in dev and on GitHub Pages.
  { basename: import.meta.env.BASE_URL },
)

export default router
