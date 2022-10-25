import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Popup from 'reactjs-popup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons'; 
import { ref, set} from 'firebase/database';
import {ref as refSB, getDownloadURL} from "firebase/storage";

function BasicInfo(props){
    const [,forceRender] = useState(1);
    const employeeData = props.state; 
    const employeeNode = props.node;
    const storage = props.storage;
    const db = props.database;

    const updateDatabase = () => {
        const allInputs = Array.from(document.querySelectorAll('input'));
        const reference = ref(db, '/' + employeeNode);
        const closeButton = document.querySelector('#close');

        allInputs.forEach((input) => {
            let property = input.getAttribute('data-id');
            employeeData[property] = input.value;
        })
        set(reference, employeeData);
        forceRender(2);        
        closeButton.click();
    }

    const closeModal = (e) => {
        const overlay =  e.target.closest('.' + styles.content);
        if(overlay == null){
            const closeButton = document.querySelector('#close');
            closeButton.click();
        }
    }

    async function downloadFromStorage(imageTitle) {
       const reference = refSB(storage, employeeData["name"] + "/" + employeeData[imageTitle]);
       let url = await getDownloadURL(reference);
       return url;
    }

    useEffect(() => {
        let selfImage = document.querySelector("." + styles.employeeImage)
        if(employeeData['self image'].includes("http")) 
            selfImage.setAttribute("src", employeeData['self image']);
        else{
            downloadFromStorage("self image")
            .then((url) => {
                selfImage.setAttribute("src", url);
            })
        }
    })

    return( 
        <>
            <div className={styles.basicInfo}>
                <img className={styles.employeeImage} src={""}/> 
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
                <Popup trigger={
                            <Box className={styles.button}>
                                <Button variant="contained">Update Info</Button>                          
                            </Box>} 
                        modal>
                {close => (
                    <div className={styles.overlay} onClick={closeModal}>
                        <div className={styles.content}>
                            <a onClick={close} id='close' className={styles.link}>
                                <FontAwesomeIcon icon={faX} className={styles.close}/>                                
                            </a>
                            <h1 className={styles.header}>
                                Update Info
                            </h1>
                            <hr/>
                            <br/>
                            <p className={styles.desc}>
                                Only change the text fields that you want to update,
                                leave the rest as it is.
                            </p>

                            <form className={styles.inputContainer}>
                                <Box className={styles.inputBox}>
                                    <p>New Name:</p> <TextField id="outlined-basic" defaultValue={employeeData['name']} inputProps={{'data-id': 'name' }} variant="outlined" className={styles.input} required/>
                                </Box>
                                <Box className={styles.inputBox}>
                                    <p>New Employee ID: </p> <TextField id="outlined-basic" defaultValue={employeeData['employee id']} inputProps={{'data-id': 'employee id' }} variant="outlined" className={styles.input} required/>
                                </Box>
                                <Box className={styles.inputBox}>
                                    <p>New Email: </p><TextField id="outlined-basic" defaultValue={employeeData['email']} inputProps={{'data-id': 'email' }} variant="outlined" className={styles.input} required/>
                                </Box>
                                <Box className={styles.inputBox}>
                                    <p>New Gender: </p><TextField id="outlined-basic" defaultValue={employeeData['gender']} inputProps={{'data-id': 'gender' }} variant="outlined" className={styles.input} required/>
                                </Box>
                                <Box className={styles.inputBox}>
                                    <p>New Race: </p><TextField id="outlined-basic" defaultValue={employeeData['race']} inputProps={{'data-id': 'race' }} variant="outlined" className={styles.input} required/>
                                </Box>
                                <Box className={styles.inputBox}>
                                    <p>New Age: </p><TextField id="outlined-basic" defaultValue={employeeData['age']} inputProps={{'data-id': 'age' }} variant="outlined" className={styles.input} required/>
                                </Box>
                                <Box className={styles.inputBox}>
                                    <p>New Address: </p><TextField id="outlined-basic" defaultValue={employeeData['address']} inputProps={{'data-id': 'address' }} variant="outlined" className={styles.input} required/>
                                </Box>
                                <Box className={styles.inputBox}>
                                    <p>New Salary: </p><TextField id="outlined-basic" defaultValue={employeeData['salary']} inputProps={{'data-id': 'salary' }} variant="outlined" className={styles.input} required/>
                                </Box>
                                <Box className={styles.inputBox}>
                                    <p>New Birthday: </p><TextField id="outlined-basic" defaultValue={employeeData['birthday']} inputProps={{'data-id': 'birthday' }} variant="outlined" className={styles.input} required/>
                                </Box>
                                <Box className={styles.inputBox}>
                                    <p>Years Employed: </p><TextField id="outlined-basic" defaultValue={employeeData['years employed']} inputProps={{'data-id': 'years employed' }} variant="outlined" className={styles.input} required/>
                                </Box>   
                                <Button variant="contained" onClick={updateDatabase}>Submit</Button>    
                            </form>
                        </div>   
                    </div> 
                    )}
                </Popup>
            </div> 
        </>

    )
}

export default BasicInfo