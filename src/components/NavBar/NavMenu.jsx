import React from 'react'
import TopNav from './TopNav'
import { BottomNav } from './BottomNav'

export default function NavMenu() {
  return (
    <nav className='bg-slate py-4'>
    <div className='w-5/6 m-auto'>
        <TopNav/>
        <BottomNav/>
    </div>
        
    </nav>
  )
}
