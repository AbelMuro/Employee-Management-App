import React, {useState, useContext} from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';


function LogInPage({firebase}){
    const {auth} = useContext(firebase);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    //now i want to see what i can do with the promise that is returned from the async function below
    const loginEmailPassword = async () => {
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
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
                <Box className={styles.email}>
                    <TextField id="outlined-basic" label="Enter email" variant="outlined" value={email} onChange={handleEmail}/>                    
                </Box>
                <Box className={styles.password}>
                    <TextField id="outlined-basic" label="Enter Password" variant="outlined" type='password' value={password} onChange={handlePassword}/>                    
                </Box>
                <br/>
                <br/>
                <Button variant="contained" className={styles.button} onClick={loginEmailPassword}>Login</Button>    
                <a className={styles.becomeAdminToday} onClick={createAdmin}>
                    Not an admin? Become one today!
                </a>                  
        
            </div>


        </section>
    )
}

export default LogInPage;