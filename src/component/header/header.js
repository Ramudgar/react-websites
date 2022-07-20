import * as React from 'react';
import {Link} from 'react-router-dom';

import { Button } from '@mui/material';
import '../../assets/style/header.css';

function Header() {
  return(
    <nav class="navbar navbar-expand-lg bg-light border-box shadow">
    <div class="container">
      <Link class="navbar-brand fs-3 fw-bold text-primary" to="home">StartX</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 fw-semibold me-3">
          <li class="nav-item">
            <Link class="nav-link color-self " aria-current="page" to="home">Home</Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link color-self  " to="#">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link color-self " to="emp_home">Services</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link color-self " to="#">Contact</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link color-self " to="login">Login</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link color-self " to="#">Logout</Link>
          </li>

         
        </ul>
        
      </div>
    </div>
  </nav>

  );

}

export default Header;


