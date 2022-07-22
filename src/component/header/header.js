import * as React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/style/header.css';

function Header() {
  if (localStorage.getItem('token')) {
    if (localStorage.getItem('role') === 'company') {
      return (
        <nav class="navbar navbar-expand-lg bg-light border-box shadow">
          <div class="container">
            <Link class="navbar-brand fs-3 fw-bold text-primary" to="">StartX</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 fw-semibold me-3">
                <li class="nav-item">
                  <Link class="nav-link color-self " aria-current="page" to="dashboard">Dashboard</Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link color-self  " to="addJob">Create Job</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link color-self " to="viewJob">View Job</Link>
                </li>


                <div class="dropdown">
                  <a class="btn dropdown-toggle color-self fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="addProfile">Profile</a></li>
                    <li><a class="dropdown-item" href="setting">setting</a></li>
                    <li><a class="dropdown-item" href="logout">Logout</a></li>
                  </ul>
                </div>




              </ul>

            </div>
          </div>
        </nav>

      )
    }

  }

  if (localStorage.getItem('token')) {
    if (localStorage.getItem('role') === 'employee') {

      return (
        <nav class="navbar navbar-expand-lg bg-light border-box shadow">
          <div class="container">
            <Link class="navbar-brand fs-3 fw-bold text-primary" to="home">StartX</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 fw-semibold me-3">
                <li class="nav-item">
                  <Link class="nav-link color-self " to="#">Contact</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link color-self " to="logout">Logout</Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>

      );
    }
  }

  else {
    return (
      <nav class="navbar navbar-expand-lg bg-light border-box shadow">
        <div class="container">
          <Link class="navbar-brand fs-3 fw-bold text-primary" to="home">StartX</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 fw-semibold me-3">
              <li class="nav-item">
                <Link class="nav-link color-self " to="#">Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link color-self " to="logout">Logout</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link color-self " to="logout">Logout</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    )
  }

}

export default Header;


