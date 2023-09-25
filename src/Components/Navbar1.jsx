import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar1() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ms-auto mx-auto fixed-top ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <a href="o1k">
            <img
              src="https://cdn.shopify.com/s/files/1/0672/5392/8247/files/logo-w_180x.png?v=1667987269"
              className="logo img-fluid mx-2"
              alt=""
              height="40px"
              width="140px"
            />
          </a>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse mx-4 " id="navbarSupportedContent">
          <form className="d-flex mx-5 ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav Navbars me-auto mx-auto mb-2 mb-lg-0 fw-bold row d-flex">
            <li className="nav-item col-2">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item col-2">
              <a className="nav-link" href="/Shop">
                Shop
              </a>
            </li>
            <li className="nav-item col-2">
              <a className="nav-link" href="/Blog" tabIndex={-1} aria-disabled="true">
                Blog
              </a>
            </li>
            <li className="nav-item col-2">
              <a className="nav-link " href="/about" tabIndex={-1} aria-disabled="true">
                About
              </a>
            </li>{" "}
            <li className="nav-item col-2">
              <a className="nav-link" href="/services" tabIndex={-1} aria-disabled="true">
                Services
              </a>
            </li>
            <li className="nav-item col-2">
              <a className="nav-link" href="/contact" tabIndex={-1} aria-disabled="true">
                Contact
              </a>
            </li>
          </ul>
          <button className="row d-flex border-0 bg-light fs-5">
            <li className="nav-item col-4">
              <a className="nav-link" href="#1" tabIndex={-1} aria-disabled="true">
                <i className="bi bi-bell" />
              </a>
            </li>
            <li className="nav-item col-4">
              <a className="nav-link" href="#1" tabIndex={-1} aria-disabled="true">
                <i className="bi bi-cart" />
              </a>
            </li>
            <li className="nav-item col-4">
              <a className="nav-link" href="#1" tabIndex={-1} aria-disabled="true">
                <i className="bi bi-person-circle" />
              </a>
            </li>
            </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
