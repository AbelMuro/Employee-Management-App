import React, {useState, useContext, useEffect} from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';


function LogInPage({firebase}){
    const {auth} = useContext(firebase);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const createAdmin = () => {
        navigate("/becomeadmin");
    }


    //logging in with email and password, and checking to see if the email/passwords are valid
    const loginEmailPassword = async () => {
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            if (!userCredentials.user.emailVerified) throw "email not verified";
            navigate("/adminaccount");
        }
        catch(error){
            if(error == "email not verified") 
                alert("Please verify your email");
            else
                alert("email or password is incorrect");
        }
    }

    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser) return;
        //navigate("/adminaccount");
    })

    return(
        <section>
            <div className={styles.loginContainer}>
                <p className={styles.logo}>Xtra-ordinary Company</p>
                <h1 className={styles.title}>
                    Admin Login
                </h1>
                <p className={styles.desc}>
                    This App will search through a database of employees of
                    some random company and will then display info about the employee.
                    Keep in mind that I'm using firebase realtime database. Anyone can 
                    make changes to the database as they see fit. But first, you must be an 
                    admin to view and make changes to the database.
                    Login with your email and password.
                </p>
                <Stack spacing={2}>
                    <TextField id="outlined-basic" label="Enter Email" variant="outlined" value={email} onChange={handleEmail}/> 
                    <TextField id="outlined-basic" label="Enter Password" variant="outlined" type='password' value={password} onChange={handlePassword}/>  
                </Stack>
                <Stack spacing={2}>
                    <Button variant="contained" className={styles.button} onClick={loginEmailPassword}>Login</Button>                     
                </Stack>

                <a className={styles.becomeAdminToday} onClick={createAdmin}>
                    Not an admin? Become one today!
                </a>                  
            </div>
        </section>
    )
}

export default LogInPage;
