import React from 'react';
import LogInPage from './LogInPage';
import Profile from './Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css'

function App(){
    return(
        <BrowserRouter> 
            <LogInPage/>
            <Routes>
                <Route path='/profile/:employee' element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App;