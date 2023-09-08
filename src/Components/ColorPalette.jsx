// Desc: This file contains the color palette component. This component is a modal that pops up when the user clicks on the color palette icon in the note component. The color palette component is a modal that contains a color picker component from react-color.

import React from "react";
import { CirclePicker } from "react-color";
import { useNoteAppContext } from '../provider/NoteAppProvider'

function ColorPalette() {
  const { updateNoteColor, currentNoteColor  } = useNoteAppContext()
  

  const handleChangeComplete = (color) => {
    updateNoteColor(color.hex);
    console.log({ noteColor: color.hex });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="colorPickerModal"
        tabIndex="-1"
        aria-labelledby="colorPickerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="colorPickerModalLabel">
                Pick a Color
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center ">
              <CirclePicker
                color={currentNoteColor}
                onChangeComplete={handleChangeComplete}
              />
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

export default ColorPalette;
