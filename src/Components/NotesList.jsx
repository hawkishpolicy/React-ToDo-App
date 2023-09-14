import React from "react";
import { Note, EditNote, AddNote } from "./";
import { useNoteAppContext } from "../provider/NoteAppProvider";

function NotesList() {
  const { notes, searchText, currentNoteId } = useNoteAppContext();

  return (
    <div className="notes-list">
      {notes
        .filter((note) => {
          return (
            searchText.toLowerCase() === "" ||
            note.text.toLowerCase().includes(searchText) ||
            note.title.toLowerCase().includes(searchText)
          );
        })
        .map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
            todoItems={note.todoItems}
            date={note.date}
            color={note.color}
          />
        ))}
      {notes
        .filter((note) => {
          return note.id === currentNoteId;
        })
        .map((note) => (
          <EditNote key={note.id} title={note.title} text={note.text} todoItems={note.todoItems}/>
        ))}
      <AddNote />
    </div>
  );
}
export default NotesList;
