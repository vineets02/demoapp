import React from "react"

export default function Hero() {
  return (
    <div className="container">
      <div>
        <img
          src="./assets/banner.jpg"
          alt=""
          className="w-100 "
          style={{ height: 380, marginTop: 20, objectFit: "fill" }}
        />
      </div>
    </div>
  )
}
