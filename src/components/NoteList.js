import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className='todo-list'>
      {
        notes.map((note) => <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />)
      }

      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NoteList
