import * as React from 'react';

import { Button } from '@mui/material';
import '../../assets/style/header.css';

function Header() {
  return(
    <nav class="navbar navbar-expand-lg bg-light border-box shadow">
    <div class="container">
      <a class="navbar-brand fs-3 fw-bold text-primary" href="#">StartX</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 fw-semibold me-3">
          <li class="nav-item">
            <a class="nav-link color-self " aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link color-self  " href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color-self " href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color-self " href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color-self " href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color-self " href="#">Logout</a>
          </li>

         
        </ul>
        
      </div>
    </div>
  </nav>

  );

}

export default Header;


