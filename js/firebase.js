var app_fireBase = {};
(function(){
const firebaseConfig = {
  apiKey: "AIzaSyBAGQhtCK353ksh7D-8UV1f7S1dFle9nA0",
  authDomain: "cjrp-website.firebaseapp.com",
  databaseURL: "https://cjrp-website.firebaseio.com",
  projectId: "cjrp-website",
  storageBucket: "cjrp-website.appspot.com",
  messagingSenderId: "926846227563",
  appId: "1:926846227563:web:dad640300e2ecb09984d2e",
  measurementId: "G-WCVZDHD6VB"
};
firebaseConfig.initializeApp(config);

app_fireBase = firebase;
})()