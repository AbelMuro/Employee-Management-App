import React, {useContext, useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import styles from './styles.module.css';
import {onAuthStateChanged} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

function AdminAccount({firebase}) {
    const navigate = useNavigate();
    const {auth} = useContext(firebase);
    const [employee, setEmployee] = useState("")
    const [username, setUsername] = useState(auth.currentUser.displayName);
    let disable = username == "";

    onAuthStateChanged(auth, (user) => {
        setUsername(user.displayName);
    })

    const handleChange = (e) => {
        setEmployee(e.target.value);
    }

    const submit = () => {
        navigate("/profile/" + employee);
    }

    const logOut = async () => {
        try{
            await signOut(auth);   
            alert("logged out, redirecting to log in page");   
            localStorage.removeItem("emailForSignIn");  
            navigate(-1);    
        }
        catch(error){
            console.log(error.message)
        }
    }


    return(
        <section className={styles.accountContainer}>
            <p className={styles.companyName}>Xtra-ordinary Company</p>
            <h1 className={styles.welcome}>
                Welcome {username}
            </h1>
            <p className={styles.desc}>
                Please enter the name of the employee account that you 
                would like to update. For a complete list of employee names, 
                please view this <a>link</a>
            </p>
            <Stack spacing={2}>
                <TextField id="outlined-basic" value={employee} onChange={handleChange} label="Employee Name" variant="outlined" className={styles.input} />
                <Button disabled={disable} variant="contained" onClick={submit}>Search</Button>  
                <Button disabled={disable} variant="contained" onClick={logOut}>Log Out</Button>                 
            </Stack>

        </section> 
    )
}

export default AdminAccount;