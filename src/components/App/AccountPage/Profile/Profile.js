import React from 'react';
import styles from './styles.module.css';

function Profile(){
    return(
        <section className={styles.profile}>
            <div className={styles.basicInfo}>
                <h1 className={styles.name}>Jackie wells</h1>
                <div className={styles.otherInfo}>
                    <h3 className={styles.title}>
                        Job Title:
                    </h3>
                    <p className={styles.info}>Accountant</p>  
                    <h3 className={styles.title}>
                        Employee ID:
                    </h3>                  
                    <p className={styles.info}>12345</p>
                    <h3 className={styles.title}>
                        Email:
                    </h3>
                    <p className={styles.info}>lala@gmail.com</p>
                    <h3 className={styles.title}>
                        Gender:
                    </h3>
                    <p className={styles.info}>binary</p>
                    <h3 className={styles.title}>
                        Race:
                    </h3>
                    <p className={styles.info}>martian</p>
                    <h3 className={styles.title}>
                        Age:
                    </h3>
                    <p className={styles.info}> 34</p>
                    <h3 className={styles.title}>
                        Address:
                    </h3>
                    <p className={styles.info}> thunderville 9854, jackson</p>
                    <h3 className={styles.title}>
                        Salary:
                    </h3>
                    <p className={styles.info}> $56,098</p> 
                    <h3 className={styles.title}>
                        Birthday:
                    </h3>                   
                    <p className={styles.info}> 11/23/91</p>
                    <h3 className={styles.title}>
                        Years Employed:
                    </h3>
                    <p className={styles.info}> 3</p>
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