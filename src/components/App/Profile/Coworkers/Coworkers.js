import React from 'react';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Coworkers(props) {
    const employeeData = props.state;

    return(
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
    )
}

export default Coworkers;