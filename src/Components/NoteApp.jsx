import React, { useState } from "react";
import { NotesList, Header, ColorPalette, NavBar } from "./";
import NoteAppProvider from "../provider/NoteAppProvider";

function NoteApp() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <NoteAppProvider>
      <NavBar />
      <div className={`${darkMode && "dark-mode"}`}>
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />
          <NotesList />
          <div className="footer">
            <i
              className="bi bi-plus-square"
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
