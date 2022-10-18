import React, {useState, useContext} from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';


function LogInPage({firebase}){
    const {auth} = useContext(firebase);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    //now i want to see what i can do with the promise that is returned from the async function below
    const loginEmailPassword = async () => {
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            navigate("/adminaccount");
        }
        catch(error){
            alert("email or password is incorrect");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const createAdmin = () => {
        navigate("/becomeadmin");
    }

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
                    But first, you must be an admin to make changes to the database.
                    Login with your email and password
                </p>
                <Stack spacing={2}>
                    <TextField id="outlined-basic" label="Enter Email" variant="outlined" value={email} onChange={handleEmail}/> 
                    <TextField id="outlined-basic" label="Enter Password" variant="outlined" type='password' value={password} onChange={handlePassword}/>  
                </Stack>

                <Button variant="contained" className={styles.button} onClick={loginEmailPassword}>Login</Button>    
                <a className={styles.becomeAdminToday} onClick={createAdmin}>
                    Not an admin? Become one today!
                </a>                  
        
            </div>


        </section>
    )
}

export default LogInPage;