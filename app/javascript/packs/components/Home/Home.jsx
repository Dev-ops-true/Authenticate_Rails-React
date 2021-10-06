import React, { Component } from 'react'
import Register from '../Auth/Register'
import Login from '../Auth/Login'
import axios from 'axios'
import ResetPassword from '../Auth/ResetPassword'

export default class Home extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <ResetPassword handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    )
  }
}

