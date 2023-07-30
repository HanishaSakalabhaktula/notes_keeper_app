import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const [text, setText] = useState('');
    const charLimit = 200;

    const handleChange = (e) => {
        if(charLimit - e.target.value.length >= 0){
            setText(e.target.value);
        }
    }
    const handleClick = () => {
        if(text.trim().length == 0){
            alert("Please add a todo")
        }else{
            handleAddNote(text.trim());
            setText('');
        }
    }
  return (
    <div className='lex flex-col justify-between bg-[#AAC8A7] rounded p-2 min-h-[170px]'>
      <textarea className='bg-[#AAC8A7] outline-none border-none resize-none' name="todo"  cols="30" rows="8" 
      placeholder='Type to add a todo...' value={text} onChange={handleChange}></textarea>
      <div className='flex items-center justify-between'>
        <small>{charLimit - text.length}</small>
        <button className='text-center rounded-full px-3 pb-1 bg-[#E9FFC2] hover:bg-[#FDFFAE] hover:pointer'  onClick={handleClick}>save</button>
      </div>
    </div>
  )
}

export default AddNote
