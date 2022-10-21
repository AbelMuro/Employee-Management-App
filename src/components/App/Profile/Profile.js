import React, {useState, useEffect, useRef, useContext} from 'react';
import styles from './styles.module.css';
import BasicInfo from './BasicInfo';
import Projects from './Projects';
import Coworkers from './Coworkers';
import LoadingScreen from './LoadingScreen';
import { ref, onValue} from 'firebase/database';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Profile({firebase}){
    const {db} = useContext(firebase);
    const navigate = useNavigate(); 
    const {employeeName} = useParams();
    let employeeNode = useRef();
    const [employeeData, setEmployeeData] = useState(null);


    const goBack = () => {
        navigate(-1);
    }

    //traversing through the database to find the user's account
    useEffect(() => {
        const referenceToDB = ref(db); 
        let nodeExists = false;
        onValue(referenceToDB, (snapshot) => {
            const data = snapshot.val();
            for(let node in data){
                let currentNode = data[node];
                let nameInDatabase = currentNode.name.toLowerCase(); 
                if(nameInDatabase == employeeName) {
                    employeeNode.current = node;                    
                    setEmployeeData(data[node]);
                    nodeExists = true;
                }
            }
            if(!nodeExists) {
                alert("Name that you entered does not exist in the database");
                navigate(-1);
            }
        })
    }, [])



    return !employeeData ? (<LoadingScreen/>) : (
        <section className={styles.profile}>
            <Box className={styles.goBack}>
                <Button variant="contained" onClick={goBack}>Go Back</Button>   
            </Box>
           <BasicInfo state={employeeData} node={employeeNode.current} database={db}/> 
           <Projects state={employeeData} node={employeeNode.current} database={db}/> 
           <Coworkers state={employeeData} node={employeeNode.current} database={db}/>
        </section>
    )
}

export default Profile;     
