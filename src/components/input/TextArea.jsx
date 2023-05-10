import React, { useState } from "react"

function TextArea() {
  const [value, setValue] = useState("")
  const maxLength = 200
  const handleChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
  }

  return (
    <div>
      <label htmlFor="textArea" className="form-label">
        Enter text:
      </label>
      <br />
      <textarea
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        className=" form form-control input"
        placeholder="write your query"
        style={{
          border: "1px solid rgb(234, 82, 118)",
        }}
      />
      <br />
      <p>
        Characters remaining:{" "}
        <span className="text-danger fw-bold">{maxLength - value.length}</span>
      </p>
    </div>
  )
}

export default TextArea
