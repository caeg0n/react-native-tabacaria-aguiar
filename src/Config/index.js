import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnttv7AIuAoX5ODESWSpH98kuJrJvnqBg",
  authDomain: "base-db-94581.firebaseapp.com",
  projectId: "base-db-94581",
  storageBucket: "base-db-94581.appspot.com",
  messagingSenderId: "1000033034838",
  appId: "1:1000033034838:web:b4cdb4e76dc604390411f7"
};

let Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;

