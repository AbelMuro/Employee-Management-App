import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './styles.module.css';

//TODO: find more info about e.target.files
function UploadFiles() {
    const [,forceRender] = useState(1);

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