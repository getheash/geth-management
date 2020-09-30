import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          GTS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#subscription">
                Subscription
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#submitLinks">
                Submit Links
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
