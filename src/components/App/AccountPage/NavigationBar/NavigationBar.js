import React from 'react';
import styles from './styles.module.css';

function NavigationBar() {
    return(
        <nav className={styles.navBar}>
            <div className={styles.navItem}>
                Profile
            </div>
            <div className={styles.navItem}>
                Settings
            </div>
        </nav>
    )
}

export default NavigationBar;