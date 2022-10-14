import React, {useState} from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function LogInPage(){
    const [employeeName, setEmployeeName] = useState('');
    const navigate = useNavigate();
    const disable = employeeName.match(/\d/g) != null || employeeName == '';

    const handleChange = (e) => {
        setEmployeeName(e.target.value);
    }

    const handleClick = () => {
        navigate("/profile/" + employeeName);
    }

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
                <TextField id="outlined-basic" label="Enter Name" variant="outlined" value={employeeName} onChange={handleChange}/>
                <br/>
                <br/>
                <Button disabled={disable} variant="contained" className={styles.button} onClick={handleClick}>Search</Button>              
            </div>
        </section>
    )
}

export default LogInPage;