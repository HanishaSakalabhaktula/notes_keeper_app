import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
const Note = ({note, handleDeleteNote}) => {
  return (
    <div className='note flex flex-col justify-between bg-[#A5C9CA] rounded p-2 min-h-[170px] whitespace-pre-wrap'>
      <span>
        {note.text}
      </span>
      <div className='footer flex items-center justify-between'>
        <small>Date: {note.date}</small>
        <button onClick={() => handleDeleteNote(note.id)}><MdDeleteForever size='1.3em'/></button>
      </div>
    </div>
  )
}

export default Note
