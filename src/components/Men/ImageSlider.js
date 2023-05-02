import React, { useEffect, useState } from "react"
import MyCard from "../MyCard"

export default function ImageSlider() {
  const [pro, setPro] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
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
        <h1>Mens clothing</h1>
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
