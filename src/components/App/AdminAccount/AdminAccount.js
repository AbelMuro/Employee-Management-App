import React, {useContext, useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import styles from './styles.module.css';
import {onAuthStateChanged} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {signOut} from 'firebase/auth'

function AdminAccount({firebase}) {
    const navigate = useNavigate();
    const {auth} = useContext(firebase);
    let [user, setUser] = useState("");
    
    //usually triggers when the user logs in or logs out, 
    //but can be used when the user refreshes the page to make sure
    //the auth variable remains consistent
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser != null)
            setUser(currentUser.displayName)                  
    })

    const submit = () => {
        let employee = document.querySelector("input").value;
        navigate("/profile/" + employee);
    }

    const logOut = async () => {
        try{
            await signOut(auth);   
            alert("logging out, re-directing to login page");   
            navigate("/");    
        }
        catch(error){
            console.log(error.message)
        }
    }


    return(
        <section className={styles.accountContainer}>
            <p className={styles.companyName}>Xtra-ordinary Company</p>
            <h1 className={styles.welcome}>
                Welcome {user}
            </h1>
            <p className={styles.desc}>
                Please enter the name of the employee that you 
                would like to update info for. For a complete list of employee names, 
                please view this <a className={styles.pdfLink} target="_blank" href={"https://drive.google.com/file/d/1jDzXl1F-wiVG-OR7hU3vdSTkEkKk5gCC/view?usp=sharing"}>link</a>
            </p>
            <Stack spacing={2}>
                <TextField id="outlined-basic" label="Employee Name" variant="outlined" className={styles.input} />
                <Button variant="contained" onClick={submit}>Search</Button>  
                <Button variant="contained" onClick={logOut}>Log Out</Button>                 
            </Stack>

        </section> 
    )
}

export default AdminAccount;