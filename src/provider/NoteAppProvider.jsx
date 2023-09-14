import React, { useState, useContext, createContext, useEffect } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const DEFAULT_NOTE_COLOR = "#eeeee4";

const NoteAppProviderContext = createContext({
  notes: [],
  currentNoteColor: DEFAULT_NOTE_COLOR,
  // eslint-disable-next-line no-unused-vars
  updateNoteColor: (_color) => {
    // no-op
  },
  // eslint-disable-next-line no-unused-vars
  setCurrentNoteId: (_id) => {
    // no-op
  },
  // eslint-disable-next-line no-unused-vars
  addNote: (_text, _title) => {
    // no-op
  },
  // eslint-disable-next-line no-unused-vars
  deleteNote: (_id) => {
    // no-op
  },
  // eslint-disable-next-line no-unused-vars
  filterNotes: (_searchText) => {
    // no-op
  }
});

export const useNoteAppContext = () => useContext(NoteAppProviderContext);

const NoteAppProvider = ({ children }) => {
  NoteAppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [searchText, setSearchText] = useState("");
  const [currentNoteId, setCurrentNoteId] = useState(null);
  console.log({ currentNoteId });
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Home",
      text: "This is my first note!",
      todoItems: [{id: nanoid(), item: "Take out trash", completed: false}, {id: nanoid(), item: "Call Ricky", completed: false}],
      date: "05/05/2021",
      color: DEFAULT_NOTE_COLOR,
    },
    {
      id: nanoid(),
      title: "Work",
      text: "This is my second note!",
      todoItems: [{id: nanoid(), item: "Finish Note App", completed: false}, {id: nanoid(), item: "Finish Code Review", completed: false}],
      date: "10/05/2021",
      color: "#8acefe",
    },
    {
      id: nanoid(),
      title: "Running",
      text: "This is my third note!",
      todoItems: [{id: nanoid(), item: "Threshold Workout", completed: false}, {id: nanoid(), item: "Long Run Saturday", completed: false}],
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
      todoItems: [{id: nanoid(), item: text, completed: false}],
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
    setCurrentNoteId(null);

    setNotes(editedNote);
  };

  const editNote = (text, title, todoItems) => {
    const editedNote = notes.map((note) => {
      if (note.id === currentNoteId) {
        note.text = text;
        note.title = title;
        note.todoItems = todoItems
      }
      return note;
    });
    setCurrentNoteId(null);

    setNotes(editedNote);
  };

  const currentNoteColor =
    (currentNoteId && notes.find((note) => note.id === currentNoteId)?.color) ||
    DEFAULT_NOTE_COLOR;

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <NoteAppProviderContext.Provider
      value={{
        notes,
        setCurrentNoteId,
        currentNoteId,
        updateNoteColor,
        addNote,
        deleteNote,
        currentNoteColor,
        searchText,
        setSearchText,
        editNote,
      }}
    >
      {children}
    </NoteAppProviderContext.Provider>
  );
};

export default NoteAppProvider;
