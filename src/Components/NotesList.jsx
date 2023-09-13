import React from "react";
import Note from "./Note";
import { useNoteAppContext } from "../provider/NoteAppProvider";

function NotesList() {
  const { notes, searchText, todoList } = useNoteAppContext();

  console.log(notes);
  console.log(todoList);

  const itemList = notes.map((note) => note.todo);
  console.log(itemList);

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
    </div>
  );
}
export default NotesList;
