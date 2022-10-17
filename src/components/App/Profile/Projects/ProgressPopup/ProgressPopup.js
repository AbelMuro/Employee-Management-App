import React, {useState} from 'react';
import styles from './styles.module.css';
import Popup from 'reactjs-popup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons'; 

function ProgressPopup (props) {
    const employeeData = props.state;     
    const taskNumber = props.task;
    const [progress, setProgress] = useState("" + employeeData[`${taskNumber}`])            //converting a number into a string    
    const updateProgress = props.updateProgress;
    let disable = progress.match(/\D+/g) != null || progress.match(/\D/g) != null || progress < 1 || progress > 100;
    let disableUpdateButton = progress == 100 || props.disable;

    const handleChange = (e) => {
        setProgress(e.target.value);
    }

    const handleClick = () => {
        const closeButton = document.querySelector('#close');
        closeButton.click();
        updateProgress(progress, taskNumber);
    }

    const closeModal = (e) => {
        const overlay =  e.target.closest('.' + styles.content);
        if(overlay == null){
            const closeButton = document.querySelector('#close');
            closeButton.click();
        }
    }

    return(
        <Popup 
            trigger={<Button disabled={disableUpdateButton} variant="contained" className={styles.individualButton}>Update Progress</Button> }
            modal>
            {close => (
                <div className={styles.overlay} onClick={closeModal}>
                    <div className={styles.content}>
                        <a onClick={close} className={styles.link} id="close">
                            <FontAwesomeIcon icon={faX} className={styles.close}/>                             
                        </a>
                        <h1 className={styles.header}>
                            Update Progress
                        </h1>
                        <hr/>
                        <p className={styles.desc}>
                            Enter a number between 1 and 100
                        </p>
                        <Box className={styles.inputContainer}>
                            <p>Enter Progress: </p> <TextField id="outlined-basic" value={progress} onChange={handleChange} variant="outlined" required/>
                        </Box>
                        <Button disabled={disable} variant="contained" onClick={handleClick}>Update Progress</Button>   
                    </div>
                </div>
            )}
        </Popup>
    )
}

export default ProgressPopup;