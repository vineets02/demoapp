import React from "react"

function Category(props) {
  const { name, description, items, image } = props.category

  return (
    <div>
      <div className="row">
        <div>
          <div className="card ">
            <div className="img-thumbnail   ">
              {/* likes={likes}
            onLike={handleLike} */}
              <img
                src={image}
                style={{ height: 200 }}
                class=" card-img-top d-block w-100 "
                // style={{ width: , height: 100 }}
                alt={name}
              />
              <h5 class="card-title text-center">{name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
