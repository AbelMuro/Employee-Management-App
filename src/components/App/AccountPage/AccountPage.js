import React from 'react';
import NavigationBar from './NavigationBar';
import Profile from './Profile';
import styles from './styles.module.css';

function AccountPage(){
    return(
        <>
            <NavigationBar/>
            <Profile/>
        </>
    )
}

export default AccountPage;