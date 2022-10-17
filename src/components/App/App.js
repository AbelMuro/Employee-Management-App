import React, {createContext} from 'react';
import LogInPage from './LogInPage';
import Profile from './Profile';
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
                    <Route path='/profile/:employeeName' element={<Profile firebase={Firebase}/>}/>
                </Routes>
            </BrowserRouter>            
        </Firebase.Provider>

    )

}

export default App;