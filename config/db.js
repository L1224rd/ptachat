const firebase = require('firebase');

firebase.initializeApp({
  apiKey: "AIzaSyD6ua7wzSEQKnDr4o2vVnj1CDscf6CykYE",
  authDomain: "pta-chat.firebaseapp.com",
  databaseURL: "https://pta-chat.firebaseio.com",
  projectId: "pta-chat",
  storageBucket: "pta-chat.appspot.com",
  messagingSenderId: "1025393446903",
  appId: "1:1025393446903:web:5169bc06dc9239d0"
});

module.exports = firebase.database();