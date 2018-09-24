import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';

import './bootstrap.css/bootstrap.min.css';

import Signup from './components/signup.js'
import Signin from './components/signin.js'
import Admin from './components/admin.js'
import Company from './components/company.js'
import Student from './components/student.js'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as firebase from 'firebase';


class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
        uid: null
      }
    }
  }


  componentWillMount() {
    firebase.auth().onAuthStateChanged((user)=> {
      console.log(user);

      if (user) {
        this.setState({
          user: {
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified,
          uid: user.uid
          }})
          // console.log(this.state.user);
      }
      else {

        this.setState({
        user: {
          name : null,
          email : null,
          photoUrl : null,
          emailVerified : null,
          uid : null 
        }})
      }
      
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Campus Recruitment System</h1>
        </header>
        <p className="App-intro">
          ...........
        </p>

        <Router>
          <div className="container">
            {!this.state.user.email?
              <div className="container-fluid">
                <Link to= "/" className="btn btn-info">Sign In</Link>
                <Link to= "/signup" className="btn btn-secondary">Sign Up</Link>
              </div>
            :

              <div className="container-fluid">
                <Link to= "/" onClick= {
                  ()=> {
                    firebase.auth().signOut()
                  }
                }

                className="button btn btn-primary">Sign Out</Link>
              </div>}

            <Route exact path= "/" component= {Signin} />
            <Route path= "/signup" component= {Signup} />
            <Route path= "/admin" component= {Admin} />
            <Route path= "/student" component= {Student} />
            <Route path= "/company" component= {Company} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
