import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function PasswordResetForm() {
  const [token, setToken] = useState("Not set")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const passwordConfirmationChangeHandler = (event) => {
    setPasswordConfirmation(event.target.value)
  }

  const tokenForAuth = () => {
    const urlParams = window.location.pathname
    const requiredParam = urlParams.slice(15)
    setToken(requiredParam)
  }

  const submitPasswordReset = (event) => {
    axios.patch("http://localhost:3000/password/reset/edit",
    {
      password: password,
      password_confirmation: passwordConfirmation,
      token: token
    },
    { withCredentials: true }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    event.preventDefault()
  }

  useEffect(() => tokenForAuth(), []) 
  return (
    <div>
      <form onSubmit={submitPasswordReset}>
      <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={passwordConfirmation}
            onChange={passwordConfirmationChangeHandler}
          />
          <button type="submit">Reset my Password</button>
      </form>
    </div>
  )
}
