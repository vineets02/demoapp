import React from "react"
import Category from "../categories/Category"
import { categoriesData } from "../../data/categoriesData"

function Categories() {
  return (
    <div>
      <h2>Categories</h2>
      <div className="row">
        {categoriesData.map((cat) => (
          <div key={cat.id} className="col-3">
            <Category category={cat} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
