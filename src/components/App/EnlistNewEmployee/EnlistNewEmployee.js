import React, {useState, useRef, useContext} from 'react';
import styles from './styles.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadFiles from './UploadFiles';
import {useLoadScript} from '@react-google-maps/api';
import {ref as refSB, uploadBytes, getDownloadURL} from "firebase/storage";
import {ref as refDB, set, push} from 'firebase/database';

function EnlistNewEmployee({firebase}) {;
    const {db, storage} = useContext(firebase);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [files, setFiles] = useState([]);
    let addressIsValid = useRef();

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAP_KEY
    })

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const resetFields = () => {
        let allFields = Array.from(document.querySelectorAll("input"));
        allFields.forEach((field) => {field.value = ""})
    }

    const handleSubmit = (e) => { 
        e.preventDefault();       
        if(!addressIsValid) return;
        const newNode =  {"task one progress": 0, "task two progress": 0, "task three progress" : 0, "task four progress" : 0,
                          "self image": "http://dummyimage.com/100x100.png/dddddd/000000",
                          "manager image": "http://dummyimage.com/100x100.png/dddddd/000000",
                          "coworker one image": "http://dummyimage.com/100x100.png/dddddd/000000",
                          "coworker two image": "http://dummyimage.com/100x100.png/dddddd/000000",
                          "coworker three image": "http://dummyimage.com/100x100.png/dddddd/000000",
                          "coworker four image": "http://dummyimage.com/100x100.png/dddddd/000000"};
        const imageDesc = ["self image", "manager image" ,"coworker one image", "coworker two image", "coworker three image", "coworker four image"];
        const referenceToDB = refDB(db);
        const referenceToNode = push(referenceToDB);

        //storing all the files uploaded by the user into the firebase storage
        //the storage will be used later to retrieve images for the employee
        files.forEach((file, index) => {
            const currentImageDesc = imageDesc[index];
            newNode[currentImageDesc] = file.name;
            const employeeBucket = refSB(storage, "/" + name + "/" + file.name);
            uploadBytes(employeeBucket, file)          
        })

        //storing all the values inputed by the user into an object
        const allInputs = Array.from(document.querySelectorAll("input"));
        allInputs.forEach((input) => {
            if(input.getAttribute("data-id") != "files"){
                const property = input.getAttribute("data-id");
                const value = input.value;
                newNode[property] = value;                
            }
        })

        //storing the object into the database
        set(referenceToNode, newNode);
    }   

    const handleClick = async () => {   
        let geocoder = new google.maps.Geocoder();    
        let status;
        try{
            await geocoder.geocode({address: address}, (results, stat) => {
                status = stat;
            })
            if(status == "OK")
                addressIsValid = true;
            else{
                addressIsValid = false;
                alert("Please enter a valid address")
            }                
        }
        catch(error){
            addressIsValid = false;
            alert("Please enter a valid address")
        }
    }

    


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
            <form onSubmit={handleSubmit} id="inputs">
                <Box className={styles.gridContainer}>
                    <TextField id="outlined-basic" label={"Enter Full Name"} inputProps={{"data-id" : "name"}} value={name} onChange={handleName} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter 6 Digit Employee ID"} inputProps={{pattern: "[0-9]{6}", "data-id" : "employee id"}} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Email"} inputProps={{pattern: "[^@\s]+@[^@\s]+\.[^@\s]+", type: "email", "data-id": "email"}} variant="outlined" required/>          
                    <TextField id="outlined-select" select label="Select Gender" inputProps={{"data-id" : "gender"}} value={gender} onChange={handleGender} required>
                        <MenuItem value={"male"}>
                            male
                        </MenuItem>
                        <MenuItem value={"female"}>
                            female
                        </MenuItem>
                        <MenuItem value={"binary"}>
                            binary
                        </MenuItem>
                        <MenuItem value={"transgender"}>
                            transgender
                        </MenuItem>
                    </TextField>
                    <TextField id="outlined-basic" label={"Enter Address"} inputProps={{"data-id" : "address"}} value={address} onChange={handleAddress} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Job Title"} inputProps={{"data-id" : "job title"}} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Race"} inputProps={{"data-id": "race"}} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Annual Salary"} inputProps={{pattern: "[0-9]{5,}", "data-id": "salary"}} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Age"} variant="outlined" inputProps={{pattern: "[0-9]{2}", "data-id" : "age"}} required/>
                    <TextField id="outlined-basic" label={"Enter Birthday"} InputLabelProps={{shrink: true}} inputProps={{type: "date", "data-id": "birthday"}}variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Coworker Name One"} inputProps={{"data-id" : "coworker one"}} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Coworker Name Two"} inputProps={{"data-id" : "coworker two"}} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Coworker Name Three"} inputProps={{"data-id" : "coworker three"}} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Coworker Name Four"} inputProps={{"data-id" : "coworker four"}} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Coworker Name Five"} inputProps={{"data-id" : "coworker five"}}variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Manager Name"} inputProps={{"data-id" : "manager"}} variant="outlined" required/>
                    <TextField id="outlined-basic" label={"Enter Department"} inputProps={{"data-id" : "department"}} variant="outlined" required/>
                    <TextField id="outlined-multiline-static" label={"Enter Project Description"} variant="outlined" multiline rows={4} className={styles.gridItem} required/>
                    <TextField id="outlined-multiline-static" label={"Enter Task One"} inputProps={{"data-id" : "task one"}} variant="outlined" multiline rows={4} className={styles.gridItem} required/>
                    <TextField id="outlined-multiline-static" label={"Enter Task Two"} inputProps={{"data-id" : "task two"}} variant="outlined" multiline rows={4} className={styles.gridItem} required/>
                    <TextField id="outlined-multiline-static" label={"Enter Task Three"} inputProps={{"data-id" : "task three"}} variant="outlined" multiline rows={4} className={styles.gridItem} required/>
                    <TextField id="outlined-multiline-static" label={"Enter Task Four"} inputProps={{"data-id" : "task four"}} variant="outlined" multiline rows={4} className={styles.gridItem} required/>
                </Box>            
                <UploadFiles files={files} setFiles={setFiles}/>
                <Stack spacing={2}>
                    <Button variant={"contained"} type="submit" onClick={handleClick}>Enlist New Employee</Button>
                    <Button variant={"contained"} onClick={resetFields}>Clear Fields</Button>
                </Stack>                
            </form>
                

        </section>
    )
}

export default EnlistNewEmployee;