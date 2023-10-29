import React from 'react'
import { Link } from 'react-router-dom'

export const BottomNav = () => {
  return (
    
    <div className='flex flex-row justify-between items-center'>
      <div><img src='/src/assets/SuvidhaLogo.png'/></div>
      <div className='text-white'>
      <ul className='flex flex-row gap-4 items-center'>
        <li><button className='bg-yellow px-4 py-2 rounded text-slate'>Apply For Internship</button></li>
        <li><button className='bg-yellow px-4 py-2 rounded text-slate'>Help Now</button></li>
        <li className='border rounded border-yellow px-4 py-2 hover:text-yellow '><Link to='/events'>Events</Link></li>
        <li className='border rounded border-yellow px-4 py-2 hover:text-yellow '><Link to='/gallery'>Gallery</Link></li>
        <li className='border rounded border-yellow px-4 py-2 hover:text-yellow '><Link to='/contact'>Contact</Link></li>
      </ul>
      </div>
    </div>
  )
}
