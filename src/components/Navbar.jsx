import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>


<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
<h1>#Event</h1>  
  <button className="navbar-toggler" type="button" color='danger' data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" to="/" >Home</Link>
        <Link className="nav-link active" to="/addEvent" >Add Event</Link>
        <Link className="nav-link active" to="/allEvent" >All Event</Link>
       
      </div>
    </div>
  </div>
</nav>




    </>
  )
}
