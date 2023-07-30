import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchNote}) => {
  return (
    <div className='w-full flex px-2 py-1 my-4 items-center bg-gray-200 rounded-full'>
        <MdSearch size='1.3em'/>
        <input onChange={(e) => handleSearchNote(e.target.value)} type="text" placeholder='search' className='w-full bg-gray-200 outline-none border-none ml-2 text-lg'/>
    </div>
  )
}

export default Search
