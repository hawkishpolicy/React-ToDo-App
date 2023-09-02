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
        class="modal fade"
        id="newNoteModal"
        tabindex="-1"
        aria-labelledby="newNoteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="newNoteModalLabel">
                Create a New Note
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <textarea
                rows="1"
                cols="55"
                placeholder="Title"
                onChange={handleTitleChange}
                value={noteTitle}
              ></textarea>
              <hr class="border border-1 opacity-50"></hr>
              <textarea
                rows="10"
                cols="55"
                placeholder="Type to add a note..."
                onChange={handleTextChange}
                value={noteText}
              ></textarea>
            </div>
            <div class="modal-footer justify-content-between">
              <small>{textCharacterLimit - noteText.length}</small>
              <button
                type="button"
                class="btn btn-primary"
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
