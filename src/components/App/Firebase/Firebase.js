import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, push} from 'firebase/database';
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



//to set up firebase hosting...

//npm install -g firebase-tools
//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//firebase login
//firebase init hosting

//it will then ask you a bunch of questions about the project

//starting emulators
//firebase setup:emulators:firestore            ensure that this is first installed
//firebase emulators:start --only auth












//function setData(node, newData){
    //const reference = ref(db, '/' + node);        //creating a specific reference to a 'node' in the database, the second argument is the 'path' to the node
    //const pushReference = push(reference);              //using the push function to generate a unique ID for each new node

    //set(pushReference, {                                //using the set() function to place a new node in the database
        //newData: newData                                //keep in mind that set() will delete any nodes with the same identifiers
    //})
//}

//setData('-100', 'example');

//function getData(name){
    //const reference = ref(db);                    //if you omitt the second argument, you will reference the entire database               

    //onValue(reference, (snapshot) => {                  //using the onValue() function to create a 'snapshot' of all the nodes in the database
        //const data = snapshot.val();                    //using the val() function to parse the data into valid javascript

        //for(let node in data){                          //iterating through all the nodes in the database
            //if(data[node].name == name){
                //console.log('found your account');
                //break;
            //}
            //else{
                //console.log('not found');
            //}
        //}
    //})    
//}

//getData('Lyda Huggan');


