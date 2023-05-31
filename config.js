import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB-aI58pNYVLm_rRTPUMoBOPow9N34YHaY",
    authDomain: "keepit-6eba8.firebaseapp.com",
    databaseURL: "https://keepit-6eba8-default-rtdb.firebaseio.com",
    projectId: "keepit-6eba8",
    storageBucket: "keepit-6eba8.appspot.com",
    messagingSenderId: "878532170877",
    appId: "1:878532170877:web:72bf8ff6f12bf030920d14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();