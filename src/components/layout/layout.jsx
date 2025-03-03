import React from 'react'
import Header from '../pages/header/header'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../footer/footer'

const Layout = () => {
  return (
    <div className='bg-[#FBFBFB]'>
        <header className='bg-[#222F3E] p-[20px_0px]'>
        <Header/>
        </header>
        <section>
          <Outlet/>
        </section>

        <footer>
          <Footer/>
        </footer>

    </div>
  )
}

export default Layout