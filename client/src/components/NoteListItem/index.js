import React, { useState } from "react";
import styles from "./index.module.css";

const NoteListItem = props => {
  const [isOpen, setOpen] = useState(false);
  return (
    <li className={styles.listItem}>
      <div className={styles.panel}>
        {props.note.title}
      </div>
      <div className={styles.accordion}>
        {props.note.text}
      </div>
    </li>
  );
};

export default NoteListItem;