import React, {useState, useContext} from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword , onAuthStateChanged, isSignInWithEmailLink, signInWithEmailLink} from 'firebase/auth';


function LogInPage({firebase}){
    const {auth} = useContext(firebase);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //const loginWithEmailLink = () => {
        //navigate("/loginwithemaillink");
    //}

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const createAdmin = () => {
        navigate("/becomeadmin");
    }


    //logging in with email and password, and checking to see if 
    //the email/passwords are valid
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

    //checking to see if the user logged in through an email link
    //useEffect(() => {
       //const saved_email = localStorage.getItem("emailLinkForSignIn");
        //if(isSignInWithEmailLink(auth, window.location.href) && saved_email){
            //signInWithEmailLink(auth, saved_email, window.location.href)
            //.then(() => {
                //localStorage.removeItem("emailLinkForSignIn");
                //navigate("/adminaccount");
            //})
       // }      
    //},[])

    //if the user has already logged in before, but hasn't logged out
    //they will automatically be logged in and be redirected to the account page
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser == null) return;
        if(!currentUser.emailVerified) return;
        navigate("/adminaccount");
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
                    But first, you must be an admin to view and make changes to the database.
                    Login with your email and password.
                </p>
                <Stack spacing={2}>
                    <TextField id="outlined-basic" label="Enter Email" variant="outlined" value={email} onChange={handleEmail}/> 
                    <TextField id="outlined-basic" label="Enter Password" variant="outlined" type='password' value={password} onChange={handlePassword}/>  
                </Stack>
                <Stack spacing={2}>
                    <Button variant="contained" className={styles.button} onClick={loginEmailPassword}>Login</Button>  
                    {/*<Button variant="contained" className={styles.button} onClick={loginWithEmailLink}>Login with email link</Button> */}                    
                </Stack>

                <a className={styles.becomeAdminToday} onClick={createAdmin}>
                    Not an admin? Become one today!
                </a>                  
        
            </div>


        </section>
    )
}

export default LogInPage;
