import React, { useEffect, useState } from "react"
import MyCard from "../MyCard"
// import MyCard from "./MyCard"

export default function Electronics() {
  const [pro, setPro] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics?limit=4")
      .then((res) => res.json())
      .then((data) => {
        console.log("=============>", data)
        setPro(data)
        // console.log("=========>", products)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <div className="">
        <h1>Electronics</h1>
      </div>
      <div className="row">
        {pro.map((item) => {
          return (
            <div key={item.id} className="col">
              <MyCard
                // key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
