import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBxvSMl1zmBK4DeqgACqrPAD8tEGjh3b0U",
    authDomain: "employee-management-app-ee938.firebaseapp.com",
    databaseURL: "https://employee-management-app-ee938-default-rtdb.firebaseio.com",
    projectId: "employee-management-app-ee938",
    storageBucket: "employee-management-app-ee938.appspot.com",
    messagingSenderId: "807475484166",
    appId: "1:807475484166:web:8f1f6620482b52ecf99587",
    measurementId: "G-Y2VBPMPYRZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize database and exporting it
export const db = getDatabase(app);

// Initialize authentication and exporting it
export const auth = getAuth(app);
