import React, {useState, useContext, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, signOut, sendEmailVerification} from 'firebase/auth';

function BecomeAdmin({firebase}) {
    const navigate = useNavigate();
    const {auth} = useContext(firebase);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [username, setUsername] = useState("");  
    const [loading, setLoading] = useState(false);   
    let error = useRef(null);
    let disable = password.match(/[a-zA-Z]/g) == null || password.match(/\W+/g) == null || password.match(/\d+/g) == null || password.length < 6 || loading != false;

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const goBack = () => {
        navigate("/");
    }


    useEffect(() => {
        (async function register () {
            if(loading){
                try {
                    if(username == "") throw "name is empty";
                    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);                //this function automatically logs you in
                    updateProfile(auth.currentUser, {
                        displayName: username
                    })   
                    await sendEmailVerification(userCredentials.user);                                                  //sending verification code
                    await signOut(auth);     
                    setLoading(false);                                                                                  //loading has stopped   
                    setTimeout(() => {alert("Account has been created, please verify your email"), navigate('/')}, 300); //this will make the call to alert() happen AFTER the re-render     
                } 
                catch(err){
                    setLoading(false);       
                    if(err.message == "Firebase: Error (auth/email-already-in-use).")
                        setTimeout(() => {alert("Email is already registered")}, 300);   
                    else if(err.message == "Firebase: Error (auth/invalid-email).")
                        setTimeout(() => {alert("Please enter a valid email")}, 300); 
                    else
                        setTimeout(() => {alert("Please enter a username")}, 300)
                }
            }
        }) ();
    })

    return(
        <section className={styles.registerContainer}>
            <p className={styles.companyName}>Xtra-ordinary Company</p>
            <h1 className={styles.title}>Register</h1>
            <p className={styles.desc}>
                To register as an admin, enter your username, email and a password.
                Password must contain at least one digit, one letter, one symbol and 
                must have at least 6 characters. Once you create your account, you will 
                need to validate your email. This app will send you a verification email link.
                You will not be able to log in UNTIL you verify your email.
            </p>
            <Stack spacing={2}>
                <TextField id="outlined-basic" value={username} onChange={handleUsername} label="Username" variant="outlined" className={styles.input} />
                <TextField id="outlined-basic" value={email} onChange={handleEmail} label="Email" variant="outlined" className={styles.input} />
                <TextField id="outlined-basic" value={password} onChange={handlePassword} type="Password" label="New Password" variant="outlined" className={styles.input} />                
            </Stack>
            <Stack spacing={2}>
                <Box className={styles.loadingButton}>
                    <Button disabled={disable} variant="contained" onClick={() => {setLoading(true)}} sx={{width: '100%'}}>Register</Button>         
                    {loading && <CircularProgress size={24} sx={{position: 'absolute', left: 0, right: 0, top: '5px', margin: 'auto'}}/>}               
                </Box>
                <Button variant="contained" onClick={goBack}>Go Back</Button>                  
            </Stack>
        </section>
    )
}

export default BecomeAdmin;