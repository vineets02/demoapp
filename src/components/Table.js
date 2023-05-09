import axios from "axios"
import { useState, useEffect } from "react"

function Table() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <table className="table table-bordered table-responsive table-striped-columns table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>

          <th>Description</th>
          <th>price</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <img
                src={item.image}
                alt={item.title}
                className=" d-block w-100 h-auto"
              />
            </td>
            <td>{item.title}</td>

            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Table
