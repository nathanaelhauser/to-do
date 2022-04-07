import React, { useState } from "react";
import styles from "./index.module.css";

const NoteListItem = props => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.panel}>
        <h2 className={styles.title} onClick={handleToggle}>{props.note.title}</h2>
        <div className={styles.actions}>
          <button className={styles.button} onClick={props.update(props.note)}>Edit</button>
          <button className={styles.button} onClick={props.delete(props.note.id)} >Delete</button>
        </div>
      </div>
      <div className={`${styles.accordion} ${isOpen ? styles.open : styles.close}`}>
        {props.note.text}
      </div>
    </li>
  );
};

export default NoteListItem;