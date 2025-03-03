import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/layout'
import Home from './components/pages/home/home'
import Sellacount from './components/pages/sell-acout/sellacount'
import Servised from './components/pages/servised/servised'
import Blog from './components/pages/blog/blog'
import Search from './components/pages/search/search'
import GetbyId from './components/pages/blog/getByid/getbyId'

const App = () => {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/sell",
          element:<Sellacount/>
        },
        {
          path:"/servies",
          element:<Servised/>
        },        
        {
          path:"/blog",
          element:<Blog/>
        },
        {
          path:"/blog/:id",
          element:<GetbyId/>
        },
        {
          path:"/search",
          element:<Search/>
        },
      ]
    }
  ])
  
  return <RouterProvider router={router} />
}

export default App