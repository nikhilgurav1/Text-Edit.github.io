import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      
      <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="btn btn-outline-success mx-1" aria-current="page" href="/">{props.home}</button>
          </li>
      </ul>
    <button className="btn btn-outline-success mx-1" aria-current='page' href='/'>{props.AboutUs}</button>
      <button className="btn btn-outline-success mx-1" aria-current='page'>Login</button>
      <button className="btn btn-outline-success mx-1" aria-current='page' href='/'>Register</button>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success mx-1" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


  </>
    </div>
  )
}
