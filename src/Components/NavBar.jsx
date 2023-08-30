import React from "react";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">
          Brand
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/to-do">
              To-Do <i class="bi bi-card-checklist"></i>
            </a>
            <a class="nav-link active" aria-current="page" href="/notes">
              Notes <i class="bi bi-journal-bookmark-fill"></i>
            </a>
            <a
              class="nav-link active"
              aria-current="page"
              href="/log-in"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login <i class="bi bi-person-circle"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Modal Code Below */}

      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="loginModalLabel">
                Login
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    required
                  />
                  <label for="inputEmail">
                    Email Address
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    required
                  />
                  <label for="inputPassword">
                    Password
                  </label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                data-bs-target="#registerModal"
                data-bs-toggle="modal"
              >
                New User?
              </button>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="registerModal"
        tabindex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="registerModalLabel">
                Register
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    required
                  />
                  <label for="inputEmail">
                    Email Address
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    required
                  />
                  <label for="inputPassword">
                    Password
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="reInputPassword"
                    placeholder="Re-type Password"
                    required
                  />
                  <label for="reInputPassword">
                    Re-type Password
                  </label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
