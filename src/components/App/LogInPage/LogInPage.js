import React from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LogInPage(){
    return(
        <section>
            <div className={styles.loginContainer}>
                <p className={styles.logo}>Xtra-ordinary Company</p>
                <h1 className={styles.title}>
                    Enter Employee Name
                </h1>
                <p className={styles.desc}>
                    This App will search through a database of employees of
                    some random company and will then display info about the employee
                </p>
                <form>
                    <TextField id="outlined-basic" label="Enter Name" variant="outlined"/>
                    <br/>
                    <br/>
                    <Button variant="contained" className={styles.button}>Search</Button>              
                </form>

            </div>


        </section>
        )
}

export default LogInPage;