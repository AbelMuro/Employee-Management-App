import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import ProgressBar from './ProgressBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
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

    return !employeeData ? (<div> loading</div>) :
    (
        <section className={styles.profile}>

            <div className={styles.basicInfo}>
                <div className={styles.otherInfo}>
                    <img className={styles.employeeImage} src={employeeData['self image']}/>
                    <p className={styles.employeeName}>
                        {employeeData['name']}
                    </p>
                    <br/>
                    <h3 className={styles.title}>
                        Job Title:&nbsp;
                    </h3>
                    <p className={styles.info}>{employeeData['job title']}</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Employee ID:&nbsp;
                    </h3>                  
                    <p className={styles.info}>{employeeData['employee id']}</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Email:&nbsp;
                    </h3>
                    <p className={styles.info}>{employeeData['email']}</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Gender:&nbsp;
                    </h3>
                    <p className={styles.info}>{employeeData['gender']}</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Race:&nbsp;
                    </h3>
                    <p className={styles.info}>{employeeData['race']}</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Age:&nbsp;
                    </h3>
                    <p className={styles.info}> {employeeData['age']}</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Address:&nbsp;
                    </h3>
                    <p className={styles.info}> {employeeData['address']}</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Salary:&nbsp;
                    </h3>
                    <p className={styles.info}>{'$' + employeeData['salary']}</p> 
                    <br/>  
                    <h3 className={styles.title}>
                        Birthday:&nbsp;
                    </h3>                   
                    <p className={styles.info}> {employeeData['birthday']}</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Years Employed:&nbsp;
                    </h3>
                    <p className={styles.info}> {employeeData['years employed']}</p>
                    <Box className={styles.button}>
                        <Button variant="contained">Update Info</Button>                          
                    </Box>
                </div>
            </div>

            <div className={styles.projects}>
                <h1 className={styles.projectTitle}>
                    Current Project:
                </h1>
                <p className={styles.projectDesc}>
                    {employeeData['current project']}
                </p>
                <div className={styles.taskContainer}>
                    <h3 className={styles.taskTitle}>
                        Task One:&nbsp;
                    </h3>
                    <p className={styles.taskInfo}>
                        {employeeData['task one']}
                    </p>
                    <br/>   
                    <h3 className={styles.workingHoursTitle}>
                        Working Hours:&nbsp; 
                    </h3> 
                    <p className={styles.workingHoursInfo}>
                        {employeeData['working hours task one']}
                    </p>
                    <br/> 
                    <p className={styles.progressTitle}>
                        Task Progress:&nbsp;
                    </p>
                    <ProgressBar value={employeeData['task one progress']}/>  
                    <Stack spacing={2} direction="row" className={styles.buttons}>
                        <Button variant="contained">Update Progress</Button> 
                        <Button variant="contained">Complete</Button>                         
                    </Stack> 
                </div>
                <div className={styles.taskContainer}>
                    <h3 className={styles.taskTitle}>
                        Task Two:&nbsp;
                    </h3>
                    <p className={styles.taskInfo}>
                        {employeeData['task two']}
                    </p>      
                    <br/>   
                    <h3 className={styles.workingHoursTitle}>
                        Working Hours:&nbsp; 
                    </h3> 
                    <p className={styles.workingHoursInfo}>
                        {employeeData['working hours task two']}
                    </p>
                    <br/>
                    <p className={styles.progressTitle}>
                        Task Progress:&nbsp;
                    </p>
                    <ProgressBar value={employeeData['task two progress']}/>
                    <Stack spacing={2} direction="row" className={styles.buttons}>
                        <Button variant="contained">Update Progress</Button> 
                        <Button variant="contained">Complete</Button>                         
                    </Stack>                    
                </div>
                <div className={styles.taskContainer}>
                    <h3 className={styles.taskTitle}>
                        Task Three:&nbsp;
                    </h3>
                    <p className={styles.taskInfo}>
                        {employeeData['task three']}
                    </p>
                    <br/>  
                    <h3 className={styles.workingHoursTitle}>
                        Working Hours:&nbsp; 
                    </h3> 
                    <p className={styles.workingHoursInfo}>
                        {employeeData['working hours task three']}
                    </p>
                    <br/>
                    <p className={styles.progressTitle}>
                        Task Progress:&nbsp;
                    </p>
                    <ProgressBar value={employeeData['task three progress']}/>   
                    <Stack spacing={2} direction="row" className={styles.buttons}>
                        <Button variant="contained">Update Progress</Button> 
                        <Button variant="contained">Complete</Button>                         
                    </Stack>              
                </div>
                <div className={styles.taskContainer}>
                    <h3 className={styles.taskTitle}>
                        Task Four:&nbsp;
                    </h3>
                    <p className={styles.taskInfo}>
                        {employeeData['task four']}
                    </p>
                    <br/>  
                    <h3 className={styles.workingHoursTitle}>
                        Working Hours:&nbsp; 
                    </h3> 
                    <p className={styles.workingHoursInfo}>
                        {employeeData['working hours task four']}
                    </p>
                    <br/> 
                    <p className={styles.progressTitle}>
                        Task Progress:&nbsp;
                    </p>
                    <ProgressBar value={employeeData['task four progress']}/>    
                    <Stack spacing={2} direction="row" className={styles.buttons}>
                        <Button variant="contained">Update Progress</Button> 
                        <Button variant="contained">Complete</Button>                         
                    </Stack>            
                </div>
            </div>

            <div className={styles.department}> 
                    <h1 className={styles.departmentTitle}>
                        Department: &nbsp;
                    </h1>
                    <p className={styles.departmentInfo}>
                        {employeeData['department']}
                    </p>
                    <br/>
                    <h3 className={styles.title}>
                        Manager:&nbsp;
                    </h3>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.managersImage} src={employeeData['manager image']}/>
                        <p className={styles.manager}>{employeeData['manager']}</p>                         
                    </div> 
                    <h3 className={styles.title}>
                            Coworkers:&nbsp;
                    </h3>          
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={employeeData['coworker one image']}/>
                        <p className={styles.coworkers}>{employeeData['coworker one']}</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={employeeData['coworker two image']}/>
                        <p className={styles.coworkers}>{employeeData['coworker two']}</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={employeeData['coworker three image']}/>
                        <p className={styles.coworkers}>{employeeData['coworker three']}</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={employeeData['coworker four image']}/>
                        <p className={styles.coworkers}>{employeeData['coworker four']}</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={employeeData['coworker five image']}/>
                        <p className={styles.coworkers}>{employeeData['coworker five']}</p>
                    </div>  
                    <Box className={styles.button}>
                        <Button variant="contained">Update team</Button>                          
                    </Box>  
                </div>

        </section>
    )
}

export default Profile;