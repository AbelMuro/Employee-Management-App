import React, {useState, useContext} from 'react';
import styles from './styles.module.css';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {sendSignInLinkToEmail, fetchSignInMethodsForEmail} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function LoginWithEmailLink({firebase}) {
    const {auth} = useContext(firebase)
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    let disable = email == "" || !email.includes("@");


    const loginWithEmailLink = async () => {
        try{
            const signInMethods = await fetchSignInMethodsForEmail(auth, email);
            if(signInMethods.length >= 1){
                await sendSignInLinkToEmail(auth, email, {
                    url: 'http://localhost:8080',
                    handleCodeInApp: true,
                })
                localStorage.setItem("emailForSignIn", email);
                alert("email login link has been sent");                    
            }
            else
                alert("email is not registered");
        }
        catch(error){
            alert(error.message);
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const goBack = () => {
        navigate(-1);
    }

    return(
        <section className={styles.container}>
            <p className={styles.companyName}>
                Xtra-Ordinary Company
            </p>
            <h1 className={styles.title}>
                Login with Email Link
            </h1>
            <TextField id="outlined-basic" label="Enter Email" variant="outlined" value={email} onChange={handleEmail}/>
            <Stack spacing={2}>
                <Button disabled={disable} variant="contained" onClick={loginWithEmailLink}>
                    Send Email Link
                </Button>
                <Button variant="contained" onClick={goBack}>
                    Go Back
                </Button>
            </Stack>

        </section>
    )

}

export default LoginWithEmailLink;