import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import styles from './styles.module.css';

const loadingBar= {
    height: '40px'
}

const loadingBarSmall = {
    height: '20px'
}

const loadingCircle = {
    width: '70px',
    height: '70px'
}

const loadingBarNextToCircle = {
    width: '200px',
    height: '40px'
}

const loadingCoworkerAvatar = {
    width: '50px',
    height: '50px'
}

function LoadingScreen(){
    return(
        <section className={styles.gridContainer}>

            <div className={styles.loadingBasicInfo}>
                <Box className={styles.loadingBox}>
                    <Box>
                        <Skeleton variant='circular'>
                            <Avatar sx={loadingCircle}/>
                        </Skeleton>                        
                    </Box>
                    <Box>
                        <Skeleton sx={loadingBarNextToCircle}/>                        
                    </Box>
                    <Box className={styles.loadingBarContainer}>
                        <Skeleton sx={loadingBar}/>                        
                    </Box>
                    <Box className={styles.loadingBarContainer}>
                        <Skeleton sx={loadingBar}/>                      
                    </Box>                    
                    <Box className={styles.loadingBarContainer}>
                        <Skeleton sx={loadingBar}/>                     
                    </Box>                    
                    <Box className={styles.loadingBarContainer}>
                        <Skeleton sx={loadingBar}/>                      
                    </Box>
                    <Box className={styles.loadingBarContainer}>
                        <Skeleton sx={loadingBar}/>                     
                    </Box>
                    <Box className={styles.loadingBarContainer}>
                        <Skeleton sx={loadingBar}/>                       
                    </Box>
                    <Box className={styles.loadingBarContainer}>
                        <Skeleton sx={loadingBar}/>                       
                    </Box>
                    <Box className={styles.loadingBarContainer}>
                        <Skeleton sx={loadingBar}/>                       
                    </Box>
                </Box>
            </div>

            <div className={styles.loadingProjects}>
                <Box className={styles.loadingBox}>
                    <Box className={styles.loadingBarContainer}>
                        <Skeleton sx={loadingBar}/>                       
                    </Box>
                    <Box className={styles.loadingBarSmallContainer}>
                        <Skeleton sx={loadingBarSmall}/>                       
                    </Box>
                    <Box className={styles.loadingBarSmallContainer}>
                        <Skeleton sx={loadingBarSmall}/>                       
                    </Box>  
                    <Box className={styles.loadingTask}>
                        <Box className={styles.loadingBarContainer}>
                            <Skeleton sx={loadingBar}/>                       
                        </Box>
                        <Box className={styles.loadingBarSmallContainer}>
                            <Skeleton sx={loadingBarSmall}/>                       
                        </Box>
                        <Box className={styles.loadingBarSmallContainer}>
                            <Skeleton sx={loadingBarSmall}/>                       
                        </Box>
                        <Box className={styles.loadingBarSmallContainer}>
                            <Skeleton sx={loadingBarSmall}/>                       
                        </Box>
                    </Box>
                    <Box className={styles.loadingTask}>
                        <Box className={styles.loadingBarContainer}>
                            <Skeleton sx={loadingBar}/>                       
                        </Box>
                        <Box className={styles.loadingBarSmallContainer}>
                            <Skeleton sx={loadingBarSmall}/>                       
                        </Box>
                        <Box className={styles.loadingBarSmallContainer}>
                            <Skeleton sx={loadingBarSmall}/>                       
                        </Box>
                        <Box className={styles.loadingBarSmallContainer}>
                            <Skeleton sx={loadingBarSmall}/>                       
                        </Box>
                    </Box>
                    <Box className={styles.loadingTask}>
                        <Box className={styles.loadingBarContainer}>
                            <Skeleton sx={loadingBar}/>                       
                        </Box>
                        <Box className={styles.loadingBarSmallContainer}>
                            <Skeleton sx={loadingBarSmall}/>                       
                        </Box>
                        <Box className={styles.loadingBarSmallContainer}>
                            <Skeleton sx={loadingBarSmall}/>                       
                        </Box>
                        <Box className={styles.loadingBarSmallContainer}>
                            <Skeleton sx={loadingBarSmall}/>                       
                        </Box>
                    </Box>
                </Box>
            </div>

            <div className={styles.loadingCoworkers}>
                <Box className={styles.loadingBox}>
                    <Box className={styles.coworkerContainer}>
                        <Skeleton variant='circular'>
                            <Avatar sx={loadingCoworkerAvatar}/>
                        </Skeleton>                        
                    </Box>    
                    <Box className={styles.coworkerContainer}>
                        <Skeleton sx={loadingBarNextToCircle}/>                        
                    </Box>  
                    <Box className={styles.coworkerContainer}>
                        <Skeleton variant='circular'>
                            <Avatar sx={loadingCoworkerAvatar}/>
                        </Skeleton>                        
                    </Box>    
                    <Box className={styles.coworkerContainer}>
                        <Skeleton sx={loadingBarNextToCircle}/>                        
                    </Box>     
                    <Box className={styles.coworkerContainer}>
                        <Skeleton variant='circular'>
                            <Avatar sx={loadingCoworkerAvatar}/>
                        </Skeleton>                        
                    </Box>    
                    <Box className={styles.coworkerContainer}>
                        <Skeleton sx={loadingBarNextToCircle}/>                        
                    </Box>     
                    <Box className={styles.coworkerContainer}>
                        <Skeleton variant='circular'>
                            <Avatar sx={loadingCoworkerAvatar}/>
                        </Skeleton>                        
                    </Box>    
                    <Box className={styles.coworkerContainer}>
                        <Skeleton sx={loadingBarNextToCircle}/>                        
                    </Box>                   
                </Box>

            </div>
        </section>

    )
}

export default LoadingScreen;