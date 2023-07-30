import React from 'react'
import {BsFillMoonFill, BsSunFill} from 'react-icons/bs'

const Header = ({handleDarkMode, darkMode}) => {
  return (
    <div className='w-full flex justify-between items-center p-2 mb-2'>
      <div className={darkMode ? 'text-3xl font-semibold text-white' : 'text-3xl font-semibold'}>Notes Keeper!</div>
      <button className='rounded-full p-2 bg-gray-300'onClick={() => handleDarkMode((prev) => !prev)}>
        {
            darkMode ? <BsSunFill className='text-[#395B64]'/> : <BsFillMoonFill />
        }
      </button>
    </div>
  )
}

export default Header
