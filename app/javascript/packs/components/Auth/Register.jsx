import React, { Component,useState, useEffect } from 'react';
import  { Redirect } from 'react-router-dom'
import axios from 'axios'
import './Register.css'

 class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      firstname: "",
      lastname: "",
      address: "",
      contact: "",
      job_title: ""
    }

    this.submitRegistrationForm = this.submitRegistrationForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitRegistrationForm(event) {
    const { email, password, password_confirmation, firstname, lastname, contact, address, job_title } = this.state
    axios.post('http://localhost:3000/jobseekers',
    {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      email: email,
      address: address,
      job_title: job_title,
      password: password,
      password_confirmation: password_confirmation
    },
    { withCredentials: true }
    )
    .then(response => {
        if (response.data.status === "created") {
          console.log(response)
          this.props.history.push('/')
        }
        })
    .catch(error => {
      console.log("Registration error:", error)
    })
    event.preventDefault()
  }

  render() {
    return (
      <>
        <form onSubmit={this.submitRegistrationForm} className="registration-form">
          <label htmlFor="firstname">First Name</label>
          <input type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
            required
            />
          <label htmlFor="lastname">Last Name</label>
          <input type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
            required
            />
          <label htmlFor="contact">Contact</label>
          <input type="text"
            name="contact"
            value={this.state.contact}
            onChange={this.handleChange}
            required
            />
          <label htmlFor="email">Email</label>
          <input type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            />
          <label htmlFor="address">Address</label>
          <input type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
            required
            />
          <label htmlFor="job_title">Job Title</label>
          <input type="text"
            name="job_title"
            value={this.state.job_title}
            onChange={this.handleChange}
            required
            />
          <label htmlFor="password">Password</label>
          <input type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            />
          <label htmlFor="password_confirmation">Confirm Your Password</label>
          <input type="password"
            name="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
            />    
          <button className="register-btn" type="submit">Register</button>  
        </form>
      </>
    );
  }
}


export default Register
