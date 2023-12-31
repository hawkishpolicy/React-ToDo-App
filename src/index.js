import React from "react";
import ReactDOM from "react-dom/client";
import { NoteApp } from "./components";
import "./TodoApp.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);
