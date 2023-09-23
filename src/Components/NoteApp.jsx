import React, { useState } from "react";
import { NotesList, Header, NavigationBar, AddNote } from "./";
import NoteAppProvider from "../provider/NoteAppProvider";

function NoteApp() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <NoteAppProvider>
      <NavigationBar />
      <div className={`${darkMode && "dark-mode"}`}>
        <div className="note-app-container">
          <Header handleToggleDarkMode={setDarkMode} />
          <NotesList />
          <div className="footer">
            <AddNote />
          </div>
        </div>
      </div>
    </NoteAppProvider>
  );
}

export default NoteApp;
