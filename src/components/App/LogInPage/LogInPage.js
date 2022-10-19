import React, {useState, useContext, useEffect} from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword , sendSignInLinkToEmail, isSignInWithEmailLink ,signOut, signInWithEmailLink} from 'firebase/auth';


function LogInPage({firebase}){
    const {auth} = useContext(firebase);
    console.log(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();



    const loginEmailPassword = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/adminaccount");
        }
        catch(error){
            alert("email or password is incorrect");
        }
    }

    //TODO: i want to make this async function part of another component.
    const loginWithEmailLink = async () => {
        try{
            await sendSignInLinkToEmail(auth, email, {
                url: 'http://localhost:8080',
                handleCodeInApp: true,
            })
            .then(() => {
                localStorage.setItem("emailForSignIn", email);
            })
            alert("email login link has been sent");            
        }
        catch(error){
            alert(error.message);
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


    //checking to see if the user logged in through an email link
    useEffect(() => {
        const saved_email = localStorage.getItem("emailForSignIn");
        if(isSignInWithEmailLink(auth, window.location.href) && saved_email){
            signInWithEmailLink(auth, saved_email, window.location.href)
            .then(() => {
                navigate("/adminaccount");
            })
        }      
    },[])



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
                <Button variant="contained" className={styles.button} onClick={loginWithEmailLink}>Login with email link</Button> 
                <a className={styles.becomeAdminToday} onClick={createAdmin}>
                    Not an admin? Become one today!
                </a>                  
        
            </div>


        </section>
    )
}

export default LogInPage;
