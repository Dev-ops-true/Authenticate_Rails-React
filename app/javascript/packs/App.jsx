import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About';
import Register from './components/Auth/Register';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login';


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
