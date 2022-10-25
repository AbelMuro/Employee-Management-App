import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Popup from 'reactjs-popup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons'; 
import TextField from '@mui/material/TextField';
import {set, ref} from 'firebase/database';
import {ref as refSB, getDownloadURL} from "firebase/storage";

function Coworkers(props) {
    const employeeData = props.state;
    const node = props.node;
    const db = props.database;
    const storage = props.storage;
    const [,forceRender] = useState(1);

    const handleClick = () => {
        const allInputs = Array.from(document.querySelectorAll('input'));
        const closeButton = document.querySelector('#close');        
        allInputs.forEach((input) => {
            let property = input.getAttribute('data-id');
            employeeData[property] = input.value;
        })

        const reference = ref(db, "/" + node);
        set(reference, employeeData);
        closeButton.click();
        forceRender(2);
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
        let managerImage = document.querySelector("." + styles.managersImage);

        console.log(employeeData["manager image"]);

        if(employeeData["manager image"].includes("http"))
            managerImage.setAttribute("src", employeeData["manager image"]);
        
        else{
            downloadFromStorage("manager image")
            .then((url) => {
                managerImage.setAttribute("src", url);
            })
        }
    },[])

    useEffect(() => {
        let coworkerOneImage = document.querySelector("#one");

        console.log(employeeData["coworker one image"]);

        if(employeeData["coworker one image"].includes("http"))
        coworkerOneImage.setAttribute("src", employeeData["coworker one image"]);
    
        else{
            downloadFromStorage("coworker one image")
            .then((url) => {
                coworkerOneImage.setAttribute("src", url);
            })
        }
    }, [])

    useEffect(() => {
        let coworkerTwoImage = document.querySelector("#two");

        console.log(employeeData["coworker two image"]);

        if(employeeData["coworker two image"].includes("http"))
        coworkerTwoImage.setAttribute("src", employeeData["coworker two image"]);
    
        else{
            downloadFromStorage("coworker two image")
            .then((url) => {
                coworkerTwoImage.setAttribute("src", url);
            })
        }
    },[])

    useEffect(() => {
        let coworkerThreeImage = document.querySelector("#three");

        console.log(employeeData["coworker three image"]);

        if(employeeData["coworker three image"].includes("http"))
        coworkerThreeImage.setAttribute("src", employeeData["coworker three image"]);
    
        else{
            downloadFromStorage("coworker three image")
            .then((url) => {
                coworkerThreeImage.setAttribute("src", url);
            })
        }
    }, [])

    useEffect(() => {
        let coworkerFourImage = document.querySelector("#four");

        console.log(employeeData["coworker four image"]);

        if(employeeData["coworker four image"].includes("http"))
        coworkerFourImage.setAttribute("src", employeeData["coworker four image"]);
    
        else{
            downloadFromStorage("coworker four image")
            .then((url) => {
                coworkerFourImage.setAttribute("src", url);
            })
        }
    }, [])

    useEffect(() => {
        let coworkerFiveImage = document.querySelector("#five");

        console.log(employeeData["coworker five image"]);

        if(employeeData["coworker five image"].includes("http"))
        coworkerFiveImage.setAttribute("src", employeeData["coworker five image"]);
    
        else{
            downloadFromStorage("coworker five image")
            .then((url) => {
                coworkerFiveImage.setAttribute("src", url);
            })
        }
    }, [])

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
                <img className={styles.managersImage} src={""}/>
                <p className={styles.manager}>{employeeData['manager']}</p>                         
            </div> 
            <h3 className={styles.title}>
                Coworkers:&nbsp;
            </h3>          
            <div className={styles.coworkerContainer}>
                <img className={styles.coworkersImage} src={employeeData['coworker one image']} id="one"/>
                <p className={styles.coworkers}>{employeeData['coworker one']}</p>
            </div>
            <div className={styles.coworkerContainer}>
                <img className={styles.coworkersImage} src={employeeData['coworker two image']} id="two"/>
                <p className={styles.coworkers}>{employeeData['coworker two']}</p>
            </div>
            <div className={styles.coworkerContainer}>
                <img className={styles.coworkersImage} src={employeeData['coworker three image']} id="three"/>
                <p className={styles.coworkers}>{employeeData['coworker three']}</p>
            </div>
            <div className={styles.coworkerContainer}>
                <img className={styles.coworkersImage} src={employeeData['coworker four image']} id="four"/>
                <p className={styles.coworkers}>{employeeData['coworker four']}</p>
            </div>
            <div className={styles.coworkerContainer}>
                <img className={styles.coworkersImage} src={employeeData['coworker five image']} id="five"/>
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