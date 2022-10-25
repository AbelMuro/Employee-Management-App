import React, {memo, useEffect} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './styles.module.css';

function UploadFiles({files, setFiles}) {
    let disable = files.length > 5;
    //const storageRef = ref(storage);
    //const imagesRef = ref(storage, "images");
    //const spaceRef = ref(storage, "images/space.jpg");
    //const newImageRef = ref(storage, "some-child");
    //uploadBytes(newImageRef, file).then((snapshot) => {console.log("file has been uploaded")})
    //spaceRef.fullPath;
    //spaceRef.name;
    //spaceRef.bucket;

    const handleFiles = (e) => {
        const allFiles = Array.from(e.target.files);
        setFiles((previousFile) => {
            return [...previousFile, ...e.target.files];
        });            
    }

    const resetFiles = () => {
        setFiles([])

    }

    useEffect(() => {
        console.log(files);
        let filesUploaded = document.querySelector("." + styles.filesUploaded);
        let allNames = "";

        for(let file = 0; file < files.length; file++){
            allNames += files[file].name;
            allNames += "<br/>";   
        }
        filesUploaded.innerHTML = allNames;
    })


    return(            
        <Box className={styles.uploadContainer}>
            <hr/>
            <h2 className={styles.uploadTitle}>
                Upload the photos/images of the employee, <br/>
                their manager and their coworkers. <br/>
                Please upload the photos in the following order <br/>
                First employee, then manager, then the coworkers 
            </h2>                
            <div className={styles.filesUploaded}></div>
            <Stack spacing={2} sx={{marginBottom: "30px"}}>
                <Button disabled={disable} variant={"contained"} component="label">
                    Upload
                    <input type="file" accept="image/*" multiple="multiple" hidden onChange={handleFiles} data-id="files"/>
                </Button> 
                <Button variant={"contained"} onClick={resetFiles}>Reset Files</Button>                
            </Stack>

            <hr/>           
        </Box>
    )
}

export default memo(UploadFiles);