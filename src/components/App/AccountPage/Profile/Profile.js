import React from 'react';
import styles from './styles.module.css';

function Profile(){
    return(
        <section className={styles.profile}>
            <div className={styles.basicInfo}>
                <h1 className={styles.name}>Jackie wells</h1>
                <div className={styles.otherInfo}>
                    <p className={styles.jobTitle}>Accountant</p>                    
                    <p className={styles.employeeID}>12345</p>
                    <p className={styles.email}>lala@gmail.com</p>
                    <p className={styles.gender}>binary</p>
                    <p className={styles.race}>martian</p>
                    <p className={styles.age}> 34</p>
                    <p className={styles.address}> thunderville 9854, jackson</p>
                    <p className={styles.salary}> $56,098</p>                    
                    <p className={styles.birthday}> 11/23/91</p>
                    <p className={styles.yearsEmployed}> 3</p>
                </div>
                <div className={styles.departmentInfo}>                    
                    <p className={styles.departmentName}>Accounting</p>
                    <img className={styles.managersImage}/>
                    <p className={styles.manager}>Jorge</p>  
                    <img className={styles.coworkersImage}/>
                    <p className={styles.coworkers}>jason</p>
                    <img className={styles.coworkersImage}/>
                    <p className={styles.coworkers}>jack</p>
                    <img className={styles.coworkersImage}/>
                    <p className={styles.coworkers}>Sussy</p>
                    <img className={styles.coworkersImage}/>
                    <p className={styles.coworkers}>David</p>
                    <img className={styles.coworkersImage}/>
                    <p className={styles.coworkers}>Jessica</p>
                </div>
            </div>
            <div className={styles.projects}>

            </div>
        </section>
    )
}

export default Profile;