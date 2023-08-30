import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, TodoApp, NoteApp } from "./";

function Main() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/to-do" element={<TodoApp />} />
        <Route path="/notes" element={<NoteApp />} />
      </Routes>
    </>
  );
}

export default Main;
