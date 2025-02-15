import React from 'react'
import Image from 'next/image'

import { NavLinks } from '@/app/Data/NavBarLinks'

const Sidebar = () => {
  return (
    <div className='border-r-1 border h-screen flex flex-col items-start p-4 lg:block hidden w-[20%]'>
      {/* logo */}
      <Image src='/instagram_logo.png' className='h-[40px] w-[120px] my-2' height={100} width={100} alt='logo' />
      {/* navigation */}
      <div className='flex flex-col gap-2 w-full'>
        {
          NavLinks.map((link, key) => (
            <div className={`flex items-center cursor-pointer hover:bg-zinc-200 gap-2 px-4 rounded-xl transition duration-300 ease-in ${link.id === 1 ? 'font-bold' : ''} `} key={link.id}>
              {link.icon}
              <h1 className='text-md font-md my-3'>{link.name}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar