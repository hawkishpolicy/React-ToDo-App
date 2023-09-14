import React, { useState } from "react";
import PropTypes from "prop-types";

function EditNote({ title, text, todoItems }) {
  EditNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    todoItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  };

  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTitle(newTitle);
    setNewText(newText);
    // editNote();
  };

  return (
    <div>
      <div
        className="modal fade"
        id="editNoteModal"
        tabIndex="-1"
        aria-labelledby="editNoteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editNoteModalLabel">
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <textarea
                rows="1"
                cols="55"
                placeholder="New Title"
                id="editNoteTitle"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              >
                {title}
              </textarea>
              <textarea
                rows="3"
                cols="55"
                placeholder="Type to add a note..."
                id="editNoteText"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              >
                {text}
              </textarea>
              {todoItems.map((todoItem) => (
                <li type="text" key={todoItem.id}>
                  {todoItem.item}
                </li>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onSubmit={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNote;
