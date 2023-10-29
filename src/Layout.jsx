import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import NavMenu from './components/NavBar/NavMenu'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-50'>
        <NavMenu/>
        <ScrollRestoration/>
        <Outlet/>
        <Footer/>
    </div>
  )
}