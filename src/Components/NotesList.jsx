import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import { useNoteAppContext } from '../provider/NoteAppProvider'

function NotesList() {
  const { notes } = useNoteAppContext()

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          color={note.color}
        />
      ))}
      <AddNote />
    </div>
  );
}

export default NotesList;
