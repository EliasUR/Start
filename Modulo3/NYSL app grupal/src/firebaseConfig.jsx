import firebase from 'firebase';

const Config = {
    apiKey: "AIzaSyD-x8WzJIyi1Xv8b0oQPpBSswCPkhu2G-s",
    authDomain: "nysl-webapp-f42cb.firebaseapp.com",
    databaseURL: "https://nysl-webapp-f42cb.firebaseio.com",
    projectId: "nysl-webapp-f42cb",
    storageBucket: "nysl-webapp-f42cb.appspot.com",
    messagingSenderId: "423894623020",
    appId: "1:423894623020:web:3296c0c57294594f484289"
};

const app = firebase.initializeApp(Config);
const db = app.database()

export default db;