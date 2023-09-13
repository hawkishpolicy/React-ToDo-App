import React from "react";
import { useNoteAppContext } from "../provider/NoteAppProvider";
import PropTypes from "prop-types";

function Note({ id, title, text, todoItems, date, color }) {
  Note.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    todoItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  const { deleteNote, setCurrentNoteId } = useNoteAppContext();
  const handleDeleteClick = () => {
    deleteNote(id);
  };

  return (
    <div>
      <div className="note" style={{ backgroundColor: color }}>
        <div className="d-flex justify-content-between align-items-center">
          <h5 style={{ margin: 0 }}>{title}</h5>
          <div className="d-flex align-items-center">
            <i
              className="open-colorPicker bi bi-palette-fill"
              style={{ padding: ".5rem" }}
              data-bs-toggle="modal"
              data-bs-target="#colorPickerModal"
              onClick={() => {
                setCurrentNoteId(id);
              }}
            ></i>
            <div className="dropdown">
              <i
                className="bi bi-three-dots-vertical"
                style={{ padding: ".5rem" }}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></i>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i
                      className="bi bi-pencil-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#editNoteModal"
                      onClick={() => {
                        setCurrentNoteId(id);
                      }}
                    ></i>
                    Edit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span>{text}</span>
        <ul className="list-group list-group-flush">
          {todoItems.map((todoItem) => (
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
                style={{
                  marginRight: ".5rem",
                  backgroundColor: "grey",
                  borderColor: "grey",
                }}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                {todoItem.item}
              </label>
            </li>
          ))}
        </ul>
        <div className="note-footer">
          <small>{date}</small>
          <i
            className="bi bi-trash3-fill"
            style={{ padding: ".5rem" }}
            size="1.5em"
            onClick={handleDeleteClick}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Note;
