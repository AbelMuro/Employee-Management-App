import React, {useState, useEffect, useRef, useContext} from 'react';
import styles from './styles.module.css';
import BasicInfo from './BasicInfo';
import Projects from './Projects';
import Coworkers from './Coworkers';
import LoadingScreen from './LoadingScreen';
import { ref, onValue} from 'firebase/database';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Profile({firebase}){
    const {db} = useContext(firebase) 
    const {employeeName} = useParams();
    let employeeNode = useRef();
    const [employeeData, setEmployeeData] = useState(null);


    //traversing through the database to find the user's account
    useEffect(() => {
        const referenceToDB = ref(db); 
        onValue(referenceToDB, (snapshot) => {
            const data = snapshot.val();
            for(let node in data){
                let currentNode = data[node];
                let tableRow = document.createElement('tr');

                let tableDataOne =  document.createElement('td');
                tableDataOne.innerHTML = currentNode["name"];
                tableRow.appendChild(tableDataOne)

                let tableDataTwo =  document.createElement('td');
                tableDataTwo.innerHTML = currentNode["employee id"];
                tableRow.appendChild(tableDataTwo)

                let tableDataThree =  document.createElement('td');
                tableDataThree.innerHTML = currentNode["email"];
                tableRow.appendChild(tableDataThree)

                let tableDataFour =  document.createElement('td');
                tableDataFour.innerHTML = currentNode["gender"];
                tableRow.appendChild(tableDataFour)

                let tableDataFive =  document.createElement('td');
                tableDataFive.innerHTML = currentNode["address"];
                tableRow.appendChild(tableDataFive)

                let tableDataSix =  document.createElement('td');
                tableDataSix.innerHTML = currentNode["race"];
                tableRow.appendChild(tableDataSix)

                let tableDataSeven =  document.createElement('td');
                tableDataSeven.innerHTML = currentNode["age"];
                tableRow.appendChild(tableDataSeven)

                let tableDataEight =  document.createElement('td');
                tableDataEight.innerHTML = currentNode["job title"];
                tableRow.appendChild(tableDataEight)

                let tableDataNine =  document.createElement('td');
                tableDataNine.innerHTML = currentNode["birthday"];
                tableRow.appendChild(tableDataNine)

                let table = document.querySelector("tbody");
                table.appendChild(tableRow);

                //if(data[node].name == employeeName) {
                    //employeeNode.current = node;                    
                    //setEmployeeData(data[node])
                //}
            }
        })
    }, [])



    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.header}>
                        <th>Name</th>
                        <th>Employee #</th>   
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Race</th>
                        <th>Age</th>       
                        <th>Job Title</th>                     
                        <th>Birthday</th>      
                    </tr>                    
                </tbody>
            </table>

        </div>

    )
}

export default Profile;     

//return !employeeData ? (<LoadingScreen/>) :
//<section className={styles.profile}>
           // <Box className={styles.goBack}>
                //<Button variant="contained">Go Back</Button>   
            //</Box>
            //<BasicInfo state={employeeData} node={employeeNode.current} database={db}/>
            //<Projects state={employeeData} node={employeeNode.current} database={db}/>
            //<Coworkers state={employeeData} node={employeeNode.current} database={db}/>
        //</section>