import React, { Component, Fragment } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './Style.scss'
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import logo from '../images/logo.png'
import google from '../images/googlelogo.png'

class Login extends Component {
    registered = () => {

    }
    render() {
        const { user, signOut, signInWithGoogle } = this.props;
        return (
            <div>
                 {
                    user ?
                   
                    <Fragment>
                        {this.registered()}
                        <Router>
                            <div className="App">
                            <Header signout={signOut} user={user}></Header>
                            <Main user={user}></Main>
                            <Nav></Nav>
                            </div>
                        </Router>
                    </Fragment>

                    : 
                    <Fragment>
                          <div className="fondo App"> 
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="m-5"> 
                                    <img src={logo} className="col-12"></img>
                                </div>
                                <div className="px-2 py-2 loginbutton">
                                    <a className="mx-auto " onClick={signInWithGoogle}>
                                        <img src={google} width="20vw" className="m-2"/>
                                        Ingresar con Google
                                    </a>
                                </div>
                            </div>  
                        </div>
                    </Fragment>
                }
            </div>
        );
    }
}

const firebaseAppAuth = firebase.auth();

const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};



export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
