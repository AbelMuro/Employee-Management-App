import React, {useContext, useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import styles from './styles.module.css';
import {onAuthStateChanged} from 'firebase/auth';

function AdminAccount({firebase}) {
    const {auth} = useContext(firebase);
    const [username, setUsername] = useState(auth.currentUser.displayName)

    onAuthStateChanged(auth, (user) => {
        setUsername(user.displayName);
    })

    return(
        <section className={styles.accountContainer}>
            <p className={styles.companyName}>Xtra-ordinary Company</p>
            <h1 className={styles.welcome}>
                Welcome {username}
            </h1>
            <p className={styles.desc}>
                Please enter the name of the employee account that you 
                would like to update
            </p>
            <Stack spacing={2}>
                <TextField id="outlined-basic" label="Employee Name" variant="outlined" className={styles.input} />
                <Button variant="contained">Search</Button>                  
            </Stack>

        </section> 
    )
}

export default AdminAccount;