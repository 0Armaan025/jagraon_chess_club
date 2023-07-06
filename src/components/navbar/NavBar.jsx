import React from 'react'
import './navbar.css';

const NavBar = () => {
  return (
    <>
    <div className="navbar">
      <nav class="navbar navbar-expand-lg" id="navbarr">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Jagraon Chess Club</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Rankings</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Join Community
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Discord</a></li>
            <li><a class="dropdown-item" href="#">Whatsapp</a></li>
            <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Questions? mail us</a></li>
          </ul>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
</div>
    
    </>
  )
}

export default NavBar;
