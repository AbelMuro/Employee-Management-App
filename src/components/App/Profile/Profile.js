import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import BasicInfo from './BasicInfo';
import Projects from './Projects';
import Coworkers from './Coworkers';
import LoadingScreen from './LoadingScreen';
import db from './Firebase';
import { ref, set, onValue, push} from 'firebase/database';
import { useParams } from 'react-router-dom';

function Profile(){
    const {employeeName} = useParams();
    const [employeeData, setEmployeeData] = useState(null);
    const reference = ref(db);



    useEffect(() => {
        onValue(reference, (snapshot) => {
            const data = snapshot.val();

            for(let node in data){
                if(data[node].name == employeeName){
                    setEmployeeData(data[node])
                    console.log("found employee");
                }
            }
        })
    }, [])


    return !employeeData ? (<LoadingScreen/>) :
    (
        <section className={styles.profile}>
            <BasicInfo state={employeeData}/>
            <Projects state={employeeData}/>
            <Coworkers state={employeeData}/>
        </section>
    )
}

export default Profile;