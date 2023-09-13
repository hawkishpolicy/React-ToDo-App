import React from "react";
import { Routes, Route } from "react-router-dom";
import { NoteApp } from "./";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/note-app" element={<NoteApp />} />
      </Routes>
    </>
  );
}

export default Main;
