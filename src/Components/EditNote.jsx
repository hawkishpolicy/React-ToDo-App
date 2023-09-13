import React from "react";

function EditNote() {
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
                Edit Note
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
                required
              ></textarea>
              <textarea
                rows="3"
                cols="55"
                placeholder="Type to add a note..."
                id="editNoteText"
                required
              ></textarea>
            </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
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
