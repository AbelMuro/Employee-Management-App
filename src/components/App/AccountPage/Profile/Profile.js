import React from 'react';
import styles from './styles.module.css';
import coworkersImage from './images/coworkersImage.jpeg';
import ProgressBar from './ProgressBar';

function Profile(){
    return(
        <section className={styles.profile}>
            <div className={styles.basicInfo}>
                <div className={styles.otherInfo}>
                    <img className={styles.employeeImage} src={coworkersImage}/>
                    <p className={styles.employeeName}>
                        Jackie Wells
                    </p>
                    <br/>
                    <h3 className={styles.title}>
                        Job Title:&nbsp;
                    </h3>
                    <p className={styles.info}>Accountant</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Employee ID:&nbsp;
                    </h3>                  
                    <p className={styles.info}>12345</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Email:&nbsp;
                    </h3>
                    <p className={styles.info}>lala@gmail.com</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Gender:&nbsp;
                    </h3>
                    <p className={styles.info}>binary</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Race:&nbsp;
                    </h3>
                    <p className={styles.info}>martian</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Age:&nbsp;
                    </h3>
                    <p className={styles.info}> 34</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Address:&nbsp;
                    </h3>
                    <p className={styles.info}> thunderville 9854, jackson</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Salary:&nbsp;
                    </h3>
                    <p className={styles.info}> $56,098</p> 
                    <br/>  
                    <h3 className={styles.title}>
                        Birthday:&nbsp;
                    </h3>                   
                    <p className={styles.info}> 11/23/91</p>
                    <br/>  
                    <h3 className={styles.title}>
                        Years Employed:&nbsp;
                    </h3>
                    <p className={styles.info}> 3</p>
                </div>
            </div>
            <div className={styles.projects}>
                <h1 className={styles.projectTitle}>
                    Current Project:
                </h1>
                <p className={styles.projectDesc}>
                    bla nlah nb lacoug enb f;uoi jwe na
                </p>
                <h3 className={styles.title}>
                    Task One:&nbsp;
                </h3>
                <p className={styles.info}>
                    lorem ipsum hadre hubmi loreimini
                </p>
                <p className={styles.progressTitle}>
                    Task Progress:&nbsp;
                </p>
                <ProgressBar value={10}/>
                <h3 className={styles.title}>
                    Task Two:&nbsp;
                </h3>
                <p className={styles.info}>
                    lorem ipsum hadre hubmi loreimini
                </p>
                <p className={styles.progressTitle}>
                    Task Progress:&nbsp;
                </p>
                <ProgressBar value={20}/>
                <h3 className={styles.title}>
                    Task Three:&nbsp;
                </h3>
                <p className={styles.info}>
                    lorem ipsum hadre hubmi loreimini
                </p>
                <p className={styles.progressTitle}>
                    Task Progress:&nbsp;
                </p>
                <ProgressBar value={60}/>
                <h3 className={styles.title}>
                    Task Four:&nbsp;
                </h3>
                <p className={styles.info}>
                    lorem ipsum hadre hubmi loreimini
                </p>
                <p className={styles.progressTitle}>
                    Task Progress:&nbsp;
                </p>
                <ProgressBar value={70}/>
            </div>

            <div className={styles.departmentInfo}> 
                    <h1 className={styles.title}>
                        Department:  
                    </h1>
                    <p className={styles.info}>
                        Accounting
                    </p>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.managersImage} src={coworkersImage}/>
                        <p className={styles.manager}>Jorge</p>                         
                    </div>           
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={coworkersImage}/>
                        <p className={styles.coworkers}>jason</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={coworkersImage}/>
                        <p className={styles.coworkers}>jack</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={coworkersImage}/>
                        <p className={styles.coworkers}>Sussy</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={coworkersImage}/>
                        <p className={styles.coworkers}>David</p>
                    </div>
                    <div className={styles.coworkerContainer}>
                        <img className={styles.coworkersImage} src={coworkersImage}/>
                        <p className={styles.coworkers}>Jessica</p>
                    </div>    
                </div>
        </section>
    )
}

export default Profile;