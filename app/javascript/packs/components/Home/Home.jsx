import React, { Component, useState } from 'react'
import ResetPassword from '../Auth/ResetPassword'

const Home = (props) => {
  console.log(props)
  
  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      <h1>User: {props.user.firstname} {props.user.lastname}</h1>
    </div>
  )
}
export default Home

