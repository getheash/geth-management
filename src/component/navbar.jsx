import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          GTS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link text-white" href="#features">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#subscription">
                Subscription
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#submitLinks">
                Submit Links
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#contact">
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
