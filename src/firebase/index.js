  
  import firebase from 'firebase';

  
  
  
  var firebaseConfig = {
    apiKey: "AIzaSyApRQldpeWD-fjfeJRK7r64WRP2v6exX_E",
    authDomain: "firstapp-32457.firebaseapp.com",
    databaseURL: "https://firstapp-32457.firebaseio.com",
    projectId: "firstapp-32457",
    storageBucket: "firstapp-32457.appspot.com",
    messagingSenderId: "185719043040",
    appId: "1:185719043040:web:871aa0ea36622a1d5a7185",
    measurementId: "G-NGNXY05J3Y"
  };
//   Initialize Firebase
 firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
var database = firebase.database();

  firebase.analytics();

 
  export default firebase