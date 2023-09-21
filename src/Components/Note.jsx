import React from "react";
import { useNoteAppContext } from "../provider/NoteAppProvider";
import PropTypes from "prop-types";
import EditNote from "./EditNote";
import ColorPalette from "./ColorPalette";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Note({ id, title, todoItems, date, color }) {
  Note.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    todoItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      }).isRequired
    ).isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  const { deleteNote } = useNoteAppContext();

  function handleDeleteClick() {
    deleteNote(id);
  }

  return (
    <div>
      <div className="note" style={{ backgroundColor: color }}>
        <div className="d-flex justify-content-between align-items-center">
          <h5 style={{ margin: 0 }}>{title}</h5>
          <div className="d-flex align-items-center">
            <EditNote
              id={id}
              todoItems={todoItems}
              color={color}
              title={title}
            />
            <ColorPalette id={id} color={color} />
          </div>
        </div>
        <ul style={{ paddingLeft: "0px" }}>
          {todoItems?.map((todoItem) => (
            <li
              className="list-group-item"
              key={todoItem.id}
              style={{ border: "none" }}
            >
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                value={todoItem.completed}
              />
              <label className="form-check-label">{todoItem.item}</label>
            </li>
          ))}
        </ul>
        <div className="note-footer">
          <small>{date}</small>
          <DeleteForeverIcon onClick={handleDeleteClick} />
        </div>
      </div>
    </div>
  );
}

export default Note;
