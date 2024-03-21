import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Blogs from './Pages/Blogs.jsx'
import Bookmark from './Pages/Bookmark.jsx'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path: '/blogs',
        element:<Blogs/>
      },
      {
        path: '/bookmark',
        element: <Bookmark/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
