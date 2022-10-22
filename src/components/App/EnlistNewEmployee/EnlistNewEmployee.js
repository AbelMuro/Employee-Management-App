import React from 'react';
import styles from './styles.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadFiles from './UploadFiles';


function EnlistNewEmployee() {
    return(
        <section className={styles.container}>
            <p className={styles.companyName}>
                Xtra-ordinary Company
            </p>
            <h1 className={styles.title}>
                Enlist Employee
            </h1>
            <p className={styles.desc}>
                Please enter the data for the new employee
                that you would like to enlist to the company
            </p>
            <Box className={styles.gridContainer}>
                <TextField id="outlined-basic" label={"Enter Name"} inputProps={{'data-id': 'name' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Employee ID"} inputProps={{'data-id': 'employee id' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Email"} inputProps={{'data-id': 'email' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Gender"} inputProps={{'data-id': 'gender' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Address"} inputProps={{'data-id': 'address' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Job Title"} inputProps={{'data-id': 'job title' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Race"} inputProps={{'data-id': 'race' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Salary"} inputProps={{'data-id': 'salary' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Age"} inputProps={{'data-id': 'age' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Birthday"} inputProps={{'data-id': 'birthday' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Coworker One"} inputProps={{'data-id': 'coworker one' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Coworker Two"} inputProps={{'data-id': 'coworker two' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Coworker Three"} inputProps={{'data-id': 'coworker three' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Coworker Four"} inputProps={{'data-id': 'coworker four' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Coworker Five"} inputProps={{'data-id': 'coworker five' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Manager"} inputProps={{'data-id': 'manager' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Project"} inputProps={{'data-id': 'current project' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Task One"} inputProps={{'data-id': 'task one' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Task Two"} inputProps={{'data-id': 'task two' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Task Three"} inputProps={{'data-id': 'task three' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Task Four"} inputProps={{'data-id': 'task four' }} variant="outlined" />
                <TextField id="outlined-basic" label={"Enter Department"} inputProps={{'data-id': 'department' }} variant="outlined" />
            </Box>
            <UploadFiles/>

            <Stack spacing={2}>
                <Button variant={"contained"}>Enlist New Employee</Button>
                <Button variant={"contained"}>Clear Fields</Button>
            </Stack>

        </section>
    )
}

export default EnlistNewEmployee;