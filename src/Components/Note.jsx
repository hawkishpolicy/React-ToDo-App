import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useNoteAppContext } from '../provider/NoteAppProvider'


function Note({ id, title, text, date, color }) {
  const { deleteNote, setCurrentNoteId } = useNoteAppContext()
  const handleDeleteClick = () => {
    deleteNote(id);
  };

  return (
    <div>
      <div className="note" style={{ backgroundColor: color}}>
        <h5 class="d-flex justify-content-between">
          {title}
          <i
            class="open-colorPicker bi bi-palette"
            data-bs-toggle="modal"
            data-bs-target="#colorPickerModal"
            onClick={() => {
              setCurrentNoteId(id)
            }}
          ></i>
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
    </div>
  );
}

export default Note;
