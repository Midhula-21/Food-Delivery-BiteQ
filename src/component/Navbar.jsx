import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg " style = {{backgroundColor: `rgb(197, 153, 182)`}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand me-5" to="/" style ={{fontFamily : 'cursive' , fontWeight : 'Bold' , fontSize : '40px'}}>BiteQ</Link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item" >
          <Link class="nav-link active mx-4" aria-current="page" to="/" style = {{fontFamily: '"Concert One", sans-serif'  ,fontSize : '25px'}}> Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active mx-4" aria-current="page" to="/register" style = {{fontFamily: '"Concert One", sans-serif' ,fontSize : '25px'}}>Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active mx-4" aria-current="page" to="/login" style = {{fontFamily: '"Concert One", sans-serif' ,fontSize : '25px'}}>Login</Link>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Find your favourite meal...." aria-label="Search" style = {{width : "500px" , fontFamily: '"Concert One", sans-serif'}}/>
        <button class="btn btn-outline-success" type="submit" style = {{width : "150px" , color : "black", fontFamily: '"Concert One", sans-serif'}}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
