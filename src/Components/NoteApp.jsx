import React, { useState } from "react";
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";
import Header from "./Header";
import ColorPalette from "./ColorPalette";
import NoteAppProvider from '../provider/NoteAppProvider'

function NoteApp() {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <NoteAppProvider>
      <div className={`${darkMode && "dark-mode"}`}>
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />
          <SearchBar handleSearchNote={setSearchText} />
          <NotesList
            // notes={notes.filter((note) =>
            //   note.text.toLowerCase().includes(searchText) || note.title.toLowerCase().includes(searchText)
            // )}
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
      <ColorPalette />
    </NoteAppProvider>
  );
}

export default NoteApp;
