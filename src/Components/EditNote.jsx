import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNoteAppContext } from "../provider/NoteAppProvider";
import Modal from "react-bootstrap/Modal";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function EditNote({ id, title, color, todoItems }) {

  EditNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    todoItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };

  const { editNoteTitle, addTodoItem, editTodoItem } = useNoteAppContext();

  const [newTitle, setNewTitle] = useState("");
  const [newTodoItem, setNewTodoItem] = useState("");
  const [editedTodoItem, setEditedTodoItem] = useState("");
  const [todoItemId, setTodoItemId] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewItem = (e) => {
    setNewTodoItem(e.target.value);
  };

  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleEditItem = (e) => {
    setEditedTodoItem(e.target.value);
  };

  const handleTitleSubmit = (e) => {
    if (e.keyCode == 13 && newTitle.trim().length > 0) {
      e.preventDefault();
      editNoteTitle(newTitle, id);
      setNewTitle("");
    }
  };
  const handleItemSubmit = (e) => {
    if (e.keyCode == 13 && newTodoItem.trim().length > 0) {
      e.preventDefault();
      addTodoItem(newTodoItem, id);
      setNewTodoItem("");
    }
  };

  const handleEditItemSubmit = (e) => {
    const id = todoItemId;
    if (e.keyCode == 13 && editedTodoItem.trim().length > 0) {
      e.preventDefault();
      console.log(editedTodoItem);
      console.log(id);
      editTodoItem(editedTodoItem, id);
      setEditedTodoItem("");
    }
  };

  return (
    <div>
      <div>
        <EditNoteIcon fontSize="large" className="me-2" onClick={handleShow} />

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton style={{ backgroundColor: color }}>
            <Modal.Title>
              <textarea
                rows="1"
                id="editNoteTitle"
                placeholder={title}
                value={newTitle}
                onChange={handleNewTitle}
                onKeyDown={handleTitleSubmit}
              ></textarea>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: color }}>
            {todoItems.map((todoItem) => (
              <ul className="todoItemList" type="text" key={todoItem.id}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  value={todoItem.completed}
                />
                <textarea
                  rows="1"
                  id="editNoteTodoItem"
                  placeholder={todoItem.item}
                  value={editedTodoItem}
                  onChange={handleEditItem}
                  onKeyDown={handleEditItemSubmit}
                  onClick={() => setTodoItemId(todoItem.id)}
                ></textarea>
                <p>{todoItem.id}</p>
              </ul>
            ))}

            <div className="d-flex ">
              <AddCircleOutlineIcon style={{ marginRight: ".5rem" }} />
              <textarea
                rows="1"
                className="addTodoItem"
                placeholder="List item"
                value={newTodoItem}
                onChange={handleNewItem}
                onKeyDown={handleItemSubmit}
              ></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: color }}></Modal.Footer>
        </Modal>
      </div>

      {/* <div
        className="modal fade"
        id="editNoteModal"
        tabIndex="-1"
        aria-labelledby="editNoteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: color }}>
            <div className="modal-header border-0">
              <form>
                <textarea
                  type="text"
                  rows="1"
                  cols="30"
                  id="editNoteTitle"
                  placeholder={title}
                  value={newTitle}
                  onChange={handleNewTitle}
                  onKeyDown={handleTitleSubmit}
                  data-bs-focus="true"
                ></textarea>
              </form>
            </div>
            <div className="modal-body">
              {todoItems.map((todoItem) => (
                <ul className="todoItemList" type="text" key={todoItem.id}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    value={todoItem.completed}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    {todoItem.item}
                  </label>
                </ul>
              ))}
              <div className="d-flex ">
                <i
                  className="bi bi-plus-square"
                  style={{ marginRight: ".5rem" }}
                ></i>
                <textarea
                  className="addTodoItem"
                  placeholder="List item"
                  value={newTodoItem}
                  onChange={handleNewItem}
                  onKeyDown={handleItemSubmit}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer" style={{ borderColor: "gray" }}>
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close */}
      {/* </button> */}
      {/* <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleTitleSubmit}>Save</button> */}
      {/* </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default EditNote;
