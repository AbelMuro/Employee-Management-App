import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './styles.module.css';

function ProgressBar(props) {
    let percentDone = props.value + "%";

    return(
        <>     
            <p className={styles.percentDone}>
                {percentDone}
            </p>
            <LinearProgress variant="determinate" value={props.value} className={styles.progressBar}/>
        </>)
}

export default ProgressBar;