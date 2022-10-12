// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from 'firebase/database';


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxvSMl1zmBK4DeqgACqrPAD8tEGjh3b0U",
    authDomain: "employee-management-app-ee938.firebaseapp.com",
    databaseURL: "https://employee-management-app-ee938-default-rtdb.firebaseio.com",
    projectId: "employee-management-app-ee938",
    storageBucket: "employee-management-app-ee938.appspot.com",
    messagingSenderId: "807475484166",
    appId: "1:807475484166:web:8f1f6620482b52ecf99587",
    measurementId: "G-Y2VBPMPYRZ",
    databaseURL: "https://employee-management-app-ee938-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize database
const database = getDatabase(app);



//second argument is the name of the data that is stored in the database
// '100' -> 'key' 'value'
const reference = ref(database, '/');

set(reference, {
    example: "example"
})

