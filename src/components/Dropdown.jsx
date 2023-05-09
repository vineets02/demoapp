import React from "react"

function Dropdown() {
  const Countrys = ["russia", "india", "south africa"]

  return (
    <div>
      <select>
        {Countrys.map((Country, indx) => {
          return <option key={indx}>{Country}</option>
        })}
      </select>
    </div>
  )
}

export default Dropdown
