import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Register.css'

const Register = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const firstnameChangeHandler = (event) => {
    setFirstname(event.target.value)
  }

  const lastnameChangeHandler = (event) => {
    setLastname(event.target.value)
  }

  const contactChangeHandler = (event) => {
    setContact(event.target.value)
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const addressChangeHandler = (event) => {
    setAddress(event.target.value)
  }

  const jobTitleChangeHandler = (event) => {
    setJobTitle(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const passwordConfirmationChangeHandler = (event) => {
    setPasswordConfirmation(event.target.value)
  }

  const submitRegistrationForm = (event) => {
    axios.post('http://localhost:3000/jobseekers',
    {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      email: email,
      address: address,
      job_title: jobTitle,
      password: password,
      password_confirmation: passwordConfirmation
    },
    { withCredentials: true }
    )
    .then(response => {
      if (response.data.status === 'created') {
        window.location.href = "http://localhost:3000/"
      } 
    })
    .catch(error => {
      console.log(error)
    })
  }

  
  return (
    <>
      <form onSubmit={submitRegistrationForm} className="registration-form">
        <label htmlFor="firstname">First Name</label>
        <input type="text"
          name="firstname"
          value={firstname}
          onChange={firstnameChangeHandler}
          required
          />
          <label htmlFor="lastname">Last Name</label>
        <input type="text"
          name="lastname"
          value={lastname}
          onChange={lastnameChangeHandler}
          required
          />
          <label htmlFor="contact">Contact</label>
        <input type="text"
          name="contact"
          value={contact}
          onChange={contactChangeHandler}
          required
          />
          <label htmlFor="email">Email</label>
        <input type="email"
          name="email"
          value={email}
          onChange={emailChangeHandler}
          required
          />
          <label htmlFor="address">Address</label>
        <input type="text"
          name="adress"
          value={address}
          onChange={addressChangeHandler}
          required
          />
          <label htmlFor="job_title">Job Title</label>
        <input type="text"
          name="job_title"
          value={jobTitle}
          onChange={jobTitleChangeHandler}
          required
          />
          <label htmlFor="password">Password</label>
        <input type="password"
          name="password"
          value={password}
          onChange={passwordChangeHandler}
          required
          />
          <label htmlFor="password_confirmation">Confirm Your Password</label>
        <input type="password"
          name="password_confirmation"
          value={passwordConfirmation}
          onChange={passwordConfirmationChangeHandler}
          required
          />    
        <button className="register-btn" type="submit">Register</button>  
      </form>
    </>
  );
}

export default Register;
