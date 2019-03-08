import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAzGz3_ZK8vL_kfgjdw6nyzrKZOCJrLfxU",
    authDomain: "clockwork-bookstore-31203.firebaseapp.com",
    databaseURL: "https://clockwork-bookstore-31203.firebaseio.com",
    projectId: "clockwork-bookstore-31203",
    storageBucket: "clockwork-bookstore-31203.appspot.com",
    messagingSenderId: "523190485201"
});

const fbase = Rebase.createClass(firebaseApp.database());

export {fbase, firebaseApp};