// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth, onAuthStateChanged} from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxvSMl1zmBK4DeqgACqrPAD8tEGjh3b0U",
  authDomain: "employee-management-app-ee938.firebaseapp.com",
  projectId: "employee-management-app-ee938",
  storageBucket: "employee-management-app-ee938.appspot.com",
  messagingSenderId: "807475484166",
  appId: "1:807475484166:web:39238dae11543a04f99587",
  measurementId: "G-B89MCH70HV",
  databaseURL: "https://employee-management-app-ee938-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize database
const database = getDatabase(app);

const auth = getAuth(app);

// authenticate user 
onAuthStateChanged(auth, (user) => {
    if(user){
        console.log("im logged in")
    }
    else{
        console.log("im not logged in");
    }
})
