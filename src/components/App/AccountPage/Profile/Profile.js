import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import coworkersImage from './images/coworkersImage.jpeg';
import ProgressBar from './ProgressBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function Profile(props){
    const [taskOneProgress, setTaskOneProgress] = useState();
    const [taskTwoProgress, setTaskTwoProgress] = useState();
    const [taskThreeProgress, setTaskThreeProgress] = useState();
    const [taskFourProgress, setTaskFourProgress] = useState();


    useEffect(() => {
        setTaskOneProgress(20);
        setTaskTwoProgress(5);
        setTaskThreeProgress(54);
        setTaskFourProgress(91)
    }, [])

    return(
        <section className={styles.profile}>

            <div className={styles.basicInfo}>
                <div className={styles.otherInfo}>
                    <img className={styles.employeeImage} src={coworkersImage}/>
                    <p className={styles.employeeName}>
                        Jackie Wells
                    </p>
                    <br/>
                    <h3 className={styles.title}>
                        Job Title:&nbsp;
                    </h3>
                    <p className={styles.info}>Accountant</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Employee ID:&nbsp;
                    </h3>                  
                    <p className={styles.info}>12345</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Email:&nbsp;
                    </h3>
                    <p className={styles.info}>lala@gmail.com</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Gender:&nbsp;
                    </h3>
                    <p className={styles.info}>binary</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Race:&nbsp;
                    </h3>
                    <p className={styles.info}>martian</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Age:&nbsp;
                    </h3>
                    <p className={styles.info}> 34</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Address:&nbsp;
                    </h3>
                    <p className={styles.info}> thunderville 9854, jackson</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Salary:&nbsp;
                    </h3>
                    <p className={styles.info}> $56,098</p> 
                    <br/>  
                    <h3 className={styles.title}>
                        Birthday:&nbsp;
                    </h3>                   
                    <p className={styles.info}> 11/23/91</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Years Employed:&nbsp;
                    </h3>
                    <p className={styles.info}> 3</p>
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
                    bla nlah nb lacoug enb f;uoi jwe na
                </p>
                <div className={styles.taskContainer}>
                    <h3 className={styles.taskTitle}>
                        Task One:&nbsp;
                    </h3>
                    <p className={styles.taskInfo}>
                        lorem ipsum hadre hubmi loreimini
                    </p>
                    <br/>   
                    <h3 className={styles.workingHoursTitle}>
                        Working Hours:&nbsp; 
                    </h3> 
                    <p className={styles.workingHoursInfo}>
                        23
                    </p>
                    <br/> 
                    <p className={styles.progressTitle}>
                        Task Progress:&nbsp;
                    </p>
                    <ProgressBar value={taskOneProgress}/>  
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
                        lorem ipsum hadre hubmi loreimini
                    </p>      
                    <br/>   
                    <h3 className={styles.workingHoursTitle}>
                        Working Hours:&nbsp; 
                    </h3> 
                    <p className={styles.workingHoursInfo}>
                        23
                    </p>
                    <br/>
                    <p className={styles.progressTitle}>
                        Task Progress:&nbsp;
                    </p>
                    <ProgressBar value={taskTwoProgress}/>
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
                        lorem ipsum hadre hubmi loreimini
                    </p>
                    <br/>  
                    <h3 className={styles.workingHoursTitle}>
                        Working Hours:&nbsp; 
                    </h3> 
                    <p className={styles.workingHoursInfo}>
                        23
                    </p>
                    <br/>
                    <p className={styles.progressTitle}>
                        Task Progress:&nbsp;
                    </p>
                    <ProgressBar value={taskThreeProgress}/>   
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
                        lorem ipsum hadre hubmi loreimini
                    </p>
                    <br/>  
                    <h3 className={styles.workingHoursTitle}>
                        Working Hours:&nbsp; 
                    </h3> 
                    <p className={styles.workingHoursInfo}>
                        23
                    </p>
                    <br/> 
                    <p className={styles.progressTitle}>
                        Task Progress:&nbsp;
                    </p>
                    <ProgressBar value={taskFourProgress}/>    
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
                        Accounting
                    </p>
                    <br/>
                    <h3 className={styles.title}>
                        Manager:&nbsp;
                    </h3>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.managersImage} src={coworkersImage}/>
                        <p className={styles.manager}>Jorge</p>                         
                    </div> 
                    <h3 className={styles.title}>
                            Coworkers:&nbsp;
                    </h3>          
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={coworkersImage}/>
                        <p className={styles.coworkers}>jason</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={coworkersImage}/>
                        <p className={styles.coworkers}>jack</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={coworkersImage}/>
                        <p className={styles.coworkers}>Sussy</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={coworkersImage}/>
                        <p className={styles.coworkers}>David</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={coworkersImage}/>
                        <p className={styles.coworkers}>Jessica</p>
                    </div>  
                    <Box className={styles.button}>
                        <Button variant="contained">Update team</Button>                          
                    </Box>  
                </div>

        </section>
    )
}

export default Profile;