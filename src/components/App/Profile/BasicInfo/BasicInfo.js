import React from 'react';
import styles from './styles.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


//TODO: need to make white container with inputs that will be used to update node on database
function BasicInfo(props){
    const employeeData = props.state; 

    return( 
        <div className={styles.basicInfo}>
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
    )
}

export default BasicInfo