import React, {useState} from 'react';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Popup from 'reactjs-popup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons'; 
import TextField from '@mui/material/TextField';
import {set, ref} from 'firebase/database';

function Coworkers(props) {
    const employeeData = props.state;
    const node = props.node;
    const db = props.database;
    const [,forceRender] = useState(1);

    const handleClick = () => {
        const allInputs = Array.from(document.querySelectorAll('input'));
        allInputs.forEach((input) => {
            let property = input.getAttribute('data-id');
            employeeData[property] = input.value;
        })

        const reference = ref(db, "/" + node);
        set(reference, employeeData);
        forceRender(2);
    }   

    const closeModal = (e) => {
        const overlay =  e.target.closest('.' + styles.content);
        if(overlay == null){
            const closeButton = document.querySelector('#close');
            closeButton.click();
        }
    }

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
                <Popup trigger={<Button variant="contained">Update team</Button>} modal>
                    {close => (
                        <div className={styles.overlay} onClick={closeModal}>
                            <div className={styles.content}>
                                <a onClick={close} className={styles.link} id="close">
                                    <FontAwesomeIcon icon={faX} className={styles.close}/>                             
                                </a>
                                <h1 className={styles.header}>
                                    Update Team
                                </h1>
                                <hr/>
                                <p className={styles.desc}>
                                    Replace current coworker
                                </p>
                                <Box className={styles.inputContainer}>
                                    <p>Enter Manager Name: </p> <TextField id="outlined-basic" defaultValue={employeeData['manager']} inputProps={{'data-id': 'manager'}} variant="outlined" required/>
                                </Box>
                                <Box className={styles.inputContainer}>
                                    <p>Enter First Coworker Name: </p> <TextField id="outlined-basic" defaultValue={employeeData['coworker one']} inputProps={{'data-id': 'coworker one'}} variant="outlined" required/>
                                </Box>
                                <Box className={styles.inputContainer}>
                                    <p>Enter Second Coworker Name: </p> <TextField id="outlined-basic" defaultValue={employeeData['coworker two']} inputProps={{'data-id': 'coworker two'}} variant="outlined" required/>
                                </Box>
                                <Box className={styles.inputContainer}>
                                    <p>Enter Third Coworker Name: </p> <TextField id="outlined-basic" defaultValue={employeeData['coworker three']} inputProps={{'data-id': 'coworker three'}} variant="outlined" required/>
                                </Box>
                                <Box className={styles.inputContainer}>
                                    <p>Enter Fourth Coworker Name: </p> <TextField id="outlined-basic" defaultValue={employeeData['coworker four']} inputProps={{'data-id': 'coworker four'}} variant="outlined" required/>
                                </Box>
                                <Box className={styles.inputContainer}>
                                    <p>Enter Fifth Coworker Name: </p> <TextField id="outlined-basic" defaultValue={employeeData['coworker five']} inputProps={{'data-id': 'coworker five'}} variant="outlined" required/>
                                </Box>
                                <Button variant="contained" onClick={handleClick}>Update</Button>   
                            </div>
                        </div>
                    )}
                </Popup>                   
            </Box>  
        </div>
    )
}

export default Coworkers;