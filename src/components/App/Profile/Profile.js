import React, {useState, useEffect, useRef, useContext} from 'react';
import styles from './styles.module.css';
import BasicInfo from './BasicInfo';
import Projects from './Projects';
import Coworkers from './Coworkers';
import LoadingScreen from './LoadingScreen';
import { ref, onValue} from 'firebase/database';
import { useParams } from 'react-router-dom';

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
                if(data[node].name == employeeName){
                    employeeNode.current = node;                    
                    setEmployeeData(data[node])
                }
            }
        })
    }, [])


    return !employeeData ? (<LoadingScreen/>) :
    (
        <section className={styles.profile}>
            <BasicInfo state={employeeData} node={employeeNode.current} database={db}/>
            <Projects state={employeeData} node={employeeNode.current} database={db}/>
            <Coworkers state={employeeData} node={employeeNode.current} database={db}/>
        </section>
    )
}

export default Profile;