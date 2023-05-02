import React, { useEffect, useState } from "react"

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
        // console.log("=========>", products)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-lg-4 mb-3">
          <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
