import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Footer, Header } from './components'
import './index.css'
import { About, Contact, Home, Projects } from './pages'




const Layout = () => { 
  return (
    <div>
<Header />
<Outlet/>
      <Footer />
    </div>
  )
}

const basePath = '/ji-yun'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: basePath,
        element: <Home />
      },
        {
          path: `${basePath}/projects`,
          element: <Projects/>
        },
        {
          path: `${basePath}/about`,
          element: <About/>
        },
        {
          path: `${basePath}/contact`,
          element: <Contact/>
        }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<RouterProvider router={router}/> </StrictMode>,
)
