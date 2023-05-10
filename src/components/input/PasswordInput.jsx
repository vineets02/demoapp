import React, { useState } from "react"

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  return (
    <div className=" ">
      <label htmlFor="password" className="form-label">
        Password:
      </label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="enter password"
        className=" form form-control  input"
        style={{
          border: "1px solid rgb(234, 82, 118)",
        }}
      />
      <br />
      <input
        type="checkbox"
        checked={showPassword}
        onChange={togglePasswordVisibility}
        className="form-btn-check  mx-2 "
      />
      <label htmlFor="showPassword" className="form-label">
        Show password
      </label>
    </div>
  )
}

export default PasswordInput
