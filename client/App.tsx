import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Moods from './components/Moods';
import Create from './components/Create';
import Account from './components/Account';
import Navbar from './components/Navbar';

export default function App(): JSX.Element {
    return (
            <Router>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/create' element={<Create/>} />
                    <Route path='/moods' element={<Moods />} />
                    <Route path='/account' element={<Account />} />
                </Routes>
            </Router>
    )
};