import React from "react"

export default function Slider() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./assets/slider.jpg"
              className="d-block  w-100"
              style={{ height: 400, width: 100, objectFit: "fill" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./assets/slider1.jpg"
              className="d-block w-100"
              style={{ height: 400, width: 100, objectFit: "fill" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./assets/slider2.jpg"
              className="d-block w-100 "
              style={{ height: 400, width: 100, objectFit: "fill" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
