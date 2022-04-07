import React, { useState } from 'react';
import styles from './index.module.css';
import NoteListItem from '../NoteListItem';

const NoteList = props => {
  const [notes, setNotes] = useState(props.notes);

  const handleCreateNote = (newNote) => setNotes([...notes, newNote]);

  const handleUpdateNote = oldNote => _ => {
    console.log("handleUpdateNote", oldNote.id);
    const updatedNotes = notes;
    // const updatedNotes = notes.map(note => {
    //   if (note.id === oldNote.id) {
    //     return updatedNote;
    //   }

    //   return note;
    // });

    setNotes(updatedNotes);
  };

  const handleDeleteNote = id => _ => {
    console.log("handleDeleteNote", id);
    // const updatedNotes = notes.filter(note => note.id !== id);
    // setNotes(updatedNotes);
  };

  return (
    <ul className={styles.list}>
      <h1>NOTE LIST</h1>
      {notes
        ? notes.map(note => <NoteListItem key={note.id} note={note} update={handleUpdateNote} delete={handleDeleteNote} />)
        : <h2 className={styles.emptyNoteList}>Add a note</h2>
      }
    </ul>
  );
};

export default NoteList;