import React, { useState, useContext, createContext, useEffect } from "react";
import { nanoid } from "nanoid";

const DEFAULT_NOTE_COLOR = '#eeeee4'

const NoteAppProviderContext = createContext({
  notes: [],
  currentNoteColor: DEFAULT_NOTE_COLOR,
  updateNoteColor: (_color) => {
    // no-op
  },
  setCurrentNoteId: (_id) => {
    // no-op
  },
  addNote: (_text, _title) => {
    // no-op
  },
  deleteNote: (_id) => {
    // no-op
  }
})

export const useNoteAppContext = () => useContext(NoteAppProviderContext)

const NoteAppProvider = ({ children }) => {
  const [currentNoteId, setCurrentNoteId] = useState(null)
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Home",
      text: "This is my first note!",
      date: "05/05/2021",
      color: DEFAULT_NOTE_COLOR,
    },
    {
      id: nanoid(),
      title: "Work",
      text: "This is my second note!",
      date: "10/05/2021",
      color: "#8acefe",
    },
    {
      id: nanoid(),
      title: "School",
      text: "This is my third note!",
      date: "15/05/2021",
      color: "#8efe8a",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: text,
      text: text,
      date: date.toLocaleDateString(),
      color: DEFAULT_NOTE_COLOR,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const updateNoteColor = (color) => {
    const editedNote = notes.map((note) => {
      if (note.id === currentNoteId) {
        note.color = color;
      }
      return note;
    });
    setCurrentNoteId(null)

    setNotes(editedNote);
    console.log("passed in color", color);
    console.log("passed in id", currentNoteId);
    console.log("array of notes", editedNote);
  };

  const currentNoteColor = (currentNoteId && notes.find(note => note.id === currentNoteId)?.color) || DEFAULT_NOTE_COLOR

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return <NoteAppProviderContext.Provider value={{
    notes,
    setCurrentNoteId,
    updateNoteColor,
    addNote,
    deleteNote,
    currentNoteColor,
  }}>{children}</NoteAppProviderContext.Provider>
}

export default NoteAppProvider