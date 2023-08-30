import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";
import Header from "./Header";

function NoteApp() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Home",
      text: "This is my first note!",
      date: "05/05/2021",
    },
    {
      id: nanoid(),
      title: "Work",
      text: "This is my second note!",
      date: "10/05/2021",
    },
    {
      id: nanoid(),
      title: "School",
      text: "This is my third note!",
      date: "15/05/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: text,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <SearchBar handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
        <div className="footer">
          <i
            class="bi bi-plus-square"
            style={{ fontSize: "2.5rem" }}
            data-bs-toggle="modal"
            data-bs-target="#newNoteModal"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default NoteApp;
