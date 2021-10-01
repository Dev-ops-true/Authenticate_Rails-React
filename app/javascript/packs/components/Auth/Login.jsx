import React, { useState } from 'react';
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const submitLoginForm = (event) => {
    axios.post('http://localhost:3000/sessions',
    {
      email:email,
      password: password
    },
    { withCredentials: true }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
        <form onSubmit={submitLoginForm}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={emailChangeHandler}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={passwordChangeHandler}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
  );
}

export default Login;
