import React from 'react';
import styles from './index.module.css';
import NoteListItem from '../NoteListItem';

const NoteList = props => {
  return (
    <ul className={styles.list}>
      <h1>NOTE LIST</h1>
      {props.notes
        ? props.notes.map((note, index) => {
          return (
            <NoteListItem
              key={index}
              note={note}
            />
          );
        })
        : <h1>Add a note</h1>}
    </ul>
  );
};

export default NoteList;