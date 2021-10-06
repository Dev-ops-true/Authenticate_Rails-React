import React, { Component } from 'react'
import axios from 'axios'

export default class ResetPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      resetErrors: "",
      resetStatus: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(event) {
    const { email } = this.state;
    axios
      .post(
        "http://localhost:3000/password/reset",
        {
          email: email,
        },
        { withCredentials: true },
      )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log("reset error", error);
      });
      event.preventDefault();
  }
  

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    )
  }
}
