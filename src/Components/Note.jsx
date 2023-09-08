import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useNoteAppContext } from '../provider/NoteAppProvider'
import PropTypes from "prop-types";


function Note({ id, title, text, date, color }) {

  Note.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  const { deleteNote, setCurrentNoteId } = useNoteAppContext()
  const handleDeleteClick = () => {
    deleteNote(id);
  };

  return (
    <div>
      <div className="note" style={{ backgroundColor: color}}>
        <h5 className="d-flex justify-content-between">
          {title}
          <i
            className="open-colorPicker bi bi-palette"
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
