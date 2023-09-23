import React from "react";
import { Note } from "./";
import { useNoteAppContext } from "../provider/NoteAppProvider";

function NotesList() {
  const { notes, searchText } = useNoteAppContext();
  return (
    <div className="notes-list">
      {notes
        .filter((note) => {
          return (
            searchText.toLowerCase() === "" ||
            note.title.toLowerCase().includes(searchText) ||
            note.todoItems.some((todoItem) =>
              todoItem.item.toLowerCase().includes(searchText)
            )
          );
        })
        .map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            todoItems={note.todoItems}
            date={note.date}
            color={note.color}
            label={note.label}
          />
        ))}
    </div>
  );
}
export default NotesList;
