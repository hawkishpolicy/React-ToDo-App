import React from "react";
import { useNoteAppContext } from "../provider/NoteAppProvider";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import Form from "react-bootstrap/Form";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LogIn from "./LogIn";

function NavBar() {
  const { searchText, setSearchText } = useNoteAppContext();
  function handleSearch(event) {
    setSearchText(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Notes</Navbar.Brand>
          <EditNoteIcon fontSize="large" className="me-2"/>
          <Form.Control
           className="me-2 w-25"
           type="search"
           id="searchBar1"
           placeholder="Search"
           aria-label="Search"
           value={searchText}
           onChange={handleSearch}
           />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LogIn />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/note-app">
            <i
              className="bi bi-card-checklist"
              style={{ fontSize: "2.5rem" }}
            ></i>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              id="searchBar"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={handleSearch}
            />
          </form>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div className="navbar-nav">
              <a
                className="nav-link active "
                aria-current="page"
                href="/log-in"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                <i
                  className="bi bi-person-circle align-text-center"
                  style={{ fontSize: "2.5rem" }}
                  id="login-icon"
                ></i>
              </a>
            </div>
          </div>
        </div> */}

      {/* Modal Code Below */}

       <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="loginModalLabel">
                  Login
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                      required
                    />
                    <label htmlFor="inputEmail">Email Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-target="#registerModal"
                  data-bs-toggle="modal"
                >
                  New User?
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="registerModal"
          tabIndex="-1"
          aria-labelledby="registerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="registerModalLabel">
                  Register
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="inputRegisterEmail"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                      required
                    />
                    <label htmlFor="inputRegisterEmail">Email Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="inputRegisterPassword"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputRegisterPassword">Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="reInputRegisterPassword"
                      placeholder="Re-type Password"
                      required
                    />
                    <label htmlFor="reInputRegisterPassword">
                      Re-type Password
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
       {/* </nav>  */}
    </div>
  );
}

export default NavBar;
