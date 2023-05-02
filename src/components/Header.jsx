import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"
import { BsHandbagFill, BsSearch } from "react-icons/bs"

export default function Header() {
  return (
    <div className="sticky-lg-top shadows">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="./assets/logo.png"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            <span className="mx-2 fs-4 fw-bold" style={{ color: "#EA5276" }}>
              My Shop
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto  mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link actives " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link actives" href="#">
                  Mens
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link actives" href="#">
                  Womens
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link actives" href="#">
                  Electronics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link actives" href="#">
                  Jewelery
                </a>
              </li>
            </ul>
            <button class="btn  " type="submit">
              <BsHandbagFill style={{ color: "#ea5276" }} />
            </button>
            <form class="d-flex" role="search">
              <input
                class="form-control shadow-sm me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn actives" type="submit">
                <BsSearch />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
