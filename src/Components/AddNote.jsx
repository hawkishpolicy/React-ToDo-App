import React from "react";
import { useState } from "react";
import { useNoteAppContext } from '../provider/NoteAppProvider'

function AddNote() {
  const { addNote } = useNoteAppContext()
  const [noteText, setNoteText] = useState("");

  const [noteTitle, setNoteTitle] = useState("");

  const textCharacterLimit = 200;

  const titleCharacterLimit = 20;

  const handleTitleChange = (event) => {
    if (titleCharacterLimit - event.target.value.length >= 0) {
      setNoteTitle(event.target.value);
    }
  };

  const handleTextChange = (event) => {
    if (textCharacterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      addNote(noteText, noteTitle);
      setNoteText("");
      setNoteTitle("");
    }
  };

  return (
    // <div className="note new">
    //   <textarea
    //     rows="8"
    //     cols="10"
    //     placeholder="Type to add a note..."
    //     onChange={handleChange}
    //     value={noteText}
    //   ></textarea>
    //   <div className="note-footer">
    //     <small>{characterLimit - noteText.length}</small>
    //     <button className="save" onClick={handleSaveClick}>
    //       Save
    //     </button>
    //   </div>
    <div>
      <div
        className="modal fade"
        id="newNoteModal"
        tabIndex="-1"
        aria-labelledby="newNoteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newNoteModalLabel">
                Create a New Note
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
                placeholder="Title"
                onChange={handleTitleChange}
                value={noteTitle}
                id="noteTitle"
              ></textarea>
              <hr className="border border-1 opacity-50"></hr>
              <textarea
                rows="10"
                cols="55"
                placeholder="Type to add a note..."
                onChange={handleTextChange}
                value={noteText}
                id="noteText"
              ></textarea>
            </div>
            <div className="modal-footer justify-content-between">
              <small>{textCharacterLimit - noteText.length}</small>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveClick}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
