import React from 'react';
import Stack from '@mui/material/Stack';
import ProgressBar from './ProgressBar';
import Button from '@mui/material/Button';
import styles from './styles.module.css';

function Projects (props) {
    const employeeData = props.state;

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
    )
}

export default Projects;