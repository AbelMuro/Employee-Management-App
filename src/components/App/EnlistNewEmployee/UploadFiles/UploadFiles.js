import React, {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './styles.module.css';
import {ref} from "firebase/storage";

//TODO: learn more about firestorage
function UploadFiles({firebase}) {
    const {storage} = useContext(firebase);
    const [,forceRender] = useState(1);

    //const storageRef = ref(storage);
    //const imagesRef = ref(storage, "images");
    //const spaceRef = ref(storage, "images/space.jpg");
    //spaceRef.fullPath;
    //spaceRef.name;
    //spaceRef.bucket;

    const handleFiles = (e) => {
        console.log(e.target.files)
    }


    return(            
        <Box className={styles.uploadContainer}>
            <p className={styles.uploadDesc}>
                Upload the photos of the manager and the coworkers
            </p>
            <Button variant={"contained"} component="label">
                Upload
                <input type="file" accept="image/*" multiple hidden onClick={handleFiles}/>
            </Button>
        </Box>
    )
}

export default UploadFiles;