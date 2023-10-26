import React from 'react'
import TopNav from './TopNav'
import { BottomNav } from './BottomNav'

export default function NavMenu() {
  return (
    <nav className='bg-slate py-4'>
    <div className='ml-8 mr-8'>
        <TopNav/>
        <BottomNav/>
    </div>
        
    </nav>
  )
}
