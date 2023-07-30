import React, { useEffect, useState } from 'react'
import NoteList from './components/NoteList'
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

const getLocalStorageItems = () => {
  const savedNotes = localStorage.getItem('react-notes-app-data');
  if(savedNotes){
    return JSON.parse(savedNotes);
  }else{
    return [];
  }
}
const App = () => {
  const [notes, setNotes] = useState(getLocalStorageItems());
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const d = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: d.toLocaleDateString(),
    }
    
    setNotes([...notes, newNote]);
  }

  const deleteNote = (id) => {
    const updated = notes.filter((note) => note.id !== id);
    setNotes(updated);
  }

  return (
    <div className={darkMode ? 'bg-[#395B64]' : 'bg-[#E7F6F2]'}>
      <div className='max-w-[960px] mx-auto px-4 min-h-screen'>
        <Header handleDarkMode={setDarkMode} darkMode={darkMode}/>
        <Search handleSearchNote={setSearchText} />
        <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
  )
}

export default App
