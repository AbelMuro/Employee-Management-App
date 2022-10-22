import React, {createContext} from 'react';
import LogInPage from './LogInPage';
import Profile from './Profile';
import BecomeAdmin from './BecomeAdmin';
import AdminAccount from './AdminAccount';
import EnlistNewEmployee from './EnlistNewEmployee';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {db, auth} from './firebase';
import './styles.css'

const Firebase = createContext();

function App(){
    return(
        <Firebase.Provider value={{db, auth}}>
            <BrowserRouter> 
                <Routes>          
                    <Route path="/" element={<LogInPage firebase={Firebase}/>}/>
                    <Route path="/adminaccount" element={<AdminAccount firebase={Firebase}/>}/>
                    <Route path="/becomeadmin" element={<BecomeAdmin firebase={Firebase}/>}/>
                    <Route path="/enlistnewemployee" element={<EnlistNewEmployee/>}/>
                    <Route path="/:employeeName" element={<Profile firebase={Firebase}/>}/>
                </Routes>
            </BrowserRouter>            
        </Firebase.Provider>
    )

}

export default App;