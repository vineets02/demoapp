import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../components/mycard.css"
// import BsHeart from "react-icons/bs"
import { FaHeart } from "react-icons/fa"

export default function MyCard(props) {
  const [likes, setLikes] = useState(0)
  const handleLike = () => {
    setLikes(likes + 1)
  }
  return (
    <div>
      <div className="row">
        <div
          class="card shadows  "
          style={{ width: "20rem", alignItems: "center", paddingBottom: 10 }}
        >
          <div
            className=" container-fluid text-center p-5  "
            style={{ backgroundColor: "#3333" }}
          >
            {/* likes={likes}
            onLike={handleLike} */}
            <img
              src={props.image}
              class="card-img-top"
              style={{ width: 100, height: 100 }}
              alt={props.title}
            />
            <button
              class="btn btn-outline-secondary rounded-circle "
              style={{ marginTop: -100, marginLeft: 20 }}
              onClick={props.onLike}
            >
              <FaHeart /> {props.likes}
            </button>
          </div>
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p className="card-subtitle mb-2 text-muted">{props.price}</p>
          </div>
          <div className="card-rating">
            {props.rating && <span>{props.rating} stars</span>}
          </div>

          <div className="row">
            <button
              class="btn col btn-success mx-3 "
              style={{ borderRadius: 12 }}
            >
              Buy Now
            </button>
            {/* <button class="btn btn-link" onClick={props.onLike}>
              <FaHeart /> {props.likes} likes
            </button> */}
            <button class="btn col btn-outline-primary px-2  ">cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
