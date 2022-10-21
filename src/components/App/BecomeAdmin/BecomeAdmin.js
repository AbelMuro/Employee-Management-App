import React, {useState, useContext} from 'react';
import styles from './styles.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, signOut, sendEmailVerification} from 'firebase/auth';

function BecomeAdmin({firebase}) {
    const navigate = useNavigate();
    const {auth} = useContext(firebase);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [username, setUsername] = useState("");     
    let disable = password.match(/[a-zA-Z]/g) == null || password.match(/\W+/g) == null || password.match(/\d+/g) == null || password.length < 6;

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

    const register = async () => {
        try {
            if(username == "") throw "name is empty";
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);        //this function automatically logs you in
            updateProfile(auth.currentUser, {
                displayName: username
            })      
            alert("Please verify your email, your account has been created but you will not be able to use it until you verify your email");
            navigate("/");
            await sendEmailVerification(userCredentials.user);    
            await signOut(auth);                                       
        }
        catch(error){
            if(error.message == "Firebase: Error (auth/email-already-in-use).")
                alert("An account is already registered with that email");
            else if(error.message == "Firebase: Error (auth/invalid-email).")
                alert("Please enter a valid email address")
            else if(error == "name is empty")
                alert("Please enter your user name")
            else
                alert(error.message);
        }
    }


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
                <Button disabled={disable} variant="contained" onClick={register}>Register</Button>                 
                <Button variant="contained" onClick={goBack}>Go Back</Button>                  
            </Stack>
        </section>
    )
}

export default BecomeAdmin;