import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note({ id, title, text, date, handleDeleteNote }) {
  const handleDeleteClick = () => {
    handleDeleteNote(id);
  };
  return (
    <div className="note">
      <h5 class="d-flex justify-content-between">
        {title}<i class="bi bi-palette"></i>
      </h5>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.5em"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
}

export default Note;
