import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import BasicInfo from './BasicInfo';
import Projects from './Projects';
import Coworkers from './Coworkers';
import LoadingScreen from './LoadingScreen';
import db from './Firebase';
import { ref, onValue} from 'firebase/database';
import { useParams } from 'react-router-dom';

function Profile(){
    const {employeeName} = useParams();
    let employeeNode = useRef();
    const [employeeData, setEmployeeData] = useState(null);
    const reference = ref(db);

    useEffect(() => {
        onValue(reference, (snapshot) => {
            const data = snapshot.val();

            for(let node in data){
                if(data[node].name == employeeName){
                    setEmployeeData(data[node])
                    employeeNode.current = node;
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