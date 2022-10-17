import React, {useState, useRef} from 'react';
import Stack from '@mui/material/Stack';
import ProgressBar from './ProgressBar';
import Button from '@mui/material/Button';
import styles from './styles.module.css';
import ProgressPopup from './ProgressPopup';
import {set, ref} from 'firebase/database';


function Projects (props) {
    const [,forceRender] = useState(1);
    const employeeData = props.state;
    const node = props.node;
    const db = props.database;
    let disableTask = useRef({'task one progress': false, 'task two progress': false, 'task three progress': false, 'task four progress': false});

    const updateProgress = (progress, taskNumber) => {
        const reference = ref(db, "/" + node);
        employeeData[`${taskNumber}`] = Number(progress);
        set(reference, employeeData);
        forceRender(2);
    }   

    const complete = (e) => {
        const reference = ref(db, "/" + node);
        const taskNumber = e.target.id;
        employeeData[`${taskNumber}`] = 100;
        set(reference, employeeData);
        disableTask.current[`${taskNumber}`] = true;
        forceRender(2);
    }

    return(
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
                <ProgressPopup state={employeeData} updateProgress={updateProgress} task={'task one progress'} disable={disableTask.current['task one progress']}/>
                <Button variant="contained" onClick={complete} id='task one progress' className={styles.individualButton}>Complete</Button>                         
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
                <ProgressPopup state={employeeData} updateProgress={updateProgress} task={'task two progress'} disable={disableTask.current['task two progress']}/>
                <Button variant="contained" onClick={complete} id='task two progress' className={styles.individualButton}>Complete</Button>                         
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
                <ProgressPopup state={employeeData} updateProgress={updateProgress} task={'task three progress'} disable={disableTask.current['task three progress']}/>
                <Button variant="contained" onClick={complete} id='task three progress' className={styles.individualButton}>Complete</Button>                         
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
                <ProgressPopup state={employeeData} updateProgress={updateProgress} task={'task four progress'} disable={disableTask.current['task four progress']}/>
                <Button variant="contained" onClick={complete} id='task four progress' className={styles.individualButton}>Complete</Button>                         
            </Stack>            
        </div>
    </div>
    )
}

export default Projects;