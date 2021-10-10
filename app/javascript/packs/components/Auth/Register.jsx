import React, { Component, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      firstname: "",
      lastname: "",
      address: "",
      contact: "",
      company: "",
      confirmationPasswordStyle: 'input',
    };

    this.submitRegistrationForm = this.submitRegistrationForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitRegistrationForm(event) {
    const {
      email,
      password,
      password_confirmation,
      firstname,
      lastname,
      contact,
      address,
      company,
      passwordConfirmation,
    } = this.state;
    if (password == password_confirmation) {
      axios
        .post(
          "http://localhost:3000/users",
          {
            firstname: firstname,
            lastname: lastname,
            contact: contact,
            email: email,
            address: address,
            company: company,
            password: password,
            password_confirmation: password_confirmation,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response)
          if (response.data.status === "created") {
            this.props.handleLogin(response.data);
            this.props.history.push("/");
          }
        })
        .catch((error) => {
          console.log("Registration error:", error);
        });
        event.preventDefault()
    } else {
      this.setState({
        password_confirmation: "",
        confirmationPasswordStyle: "error",
      });
      console.log("your passwords dont match");
    }
  }

  render() {
    return (
      <div className="form-wrapper">
          <form 
            className='form'
            onSubmit={this.submitRegistrationForm}
            className="registration-form"
          >
            <input
              className='input'
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
              required
            />
            <input
              className='input'
              type="text"
              name="lastname"
              placeholder="Surname"
              value={this.state.lastname}
              onChange={this.handleChange}
              required
            />
            <input
              className='input'
              type="text"
              name="contact"
              placeholder="Contact"
              value={this.state.contact}
              onChange={this.handleChange}
              required
            />
            <input
              className='input'
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input
              className='input'
              type="text"
              name="address"
              placeholder="Address"
              value={this.state.address}
              onChange={this.handleChange}
              required
            />
            <input
              className='input'
              type="text"
              name="company"
              placeholder="Company"
              value={this.state.company}
              onChange={this.handleChange}
              required
            />
            <input
              className='input'
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <input
              className={this.state.confirmationPasswordStyle}
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
              required
            />
            <button className="submit-button" type="submit">
              Register
            </button>
          </form>
      </div>
    );
  }
}

export default Register;
