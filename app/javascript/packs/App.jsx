import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About';
import Register from './components/Auth/Register'
import Login from './components/Auth/Login';
import axios from 'axios'
import Navbar from './components/Navbar/Navbar';
import PasswordResetForm from './components/Auth/PasswordResetForm'
import ResetPassword from './components/Auth/ResetPassword';





export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
        jobseeker: {}
      }
      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
  
    checkResetStatus() {
      axios.get("http://localhost:3001/password/reset", { withCredentials: true}).then(response => { console.log("Reset Status", response)})
    }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  handleSuccessfulAuth(data) {
    this.handleLogin(data)
    //TODO update parent component
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

    checkLoginStatus() {
      axios
        .get("http://localhost:3000/logged_in", { withCredentials: true })
        .then(response => {
          console.log("checloginstatus:",response)
          if (
            response.data.loggedInStatus === "LOGGED_IN" &&
            this.state.loggedInStatus === "NOT_LOGGED_IN"
          ) {
            this.setState({
              loggedInStatus: "LOGGED_IN",
              user: response.data.user
            });
          } else if (
            !response.data.loggedInStatus &&
            (this.state.loggedInStatus === "LOGGED_IN")
          ) {
            this.setState({
              loggedInStatus: "NOT_LOGGED_IN",
              user: {}
            });
          }
        })
        .catch(error => {
          console.log("check login error", error);
        });
    }

    render() {
      return (
        <>
          <Navbar 
            handleLogout={this.handleLogout} 
            loggedInStatus={this.state.loggedInStatus}/>
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch> */}
                    <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/register"}
              render={props => (
                <Register
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/login"}
              render={props => (
                <Login
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleSuccessfulAuth={this.handleSuccessfulAuth}
                />
              )}
            />
            <Route 
            path={"/resetpassword/:token"}
                render={props => (
                <PasswordResetForm
                />)}
            />
            <Route 
            path={"/resetpassword"}
                render={props => (
                <ResetPassword
                />)}
            />
          </Switch>
        </>
      );
    }
}
