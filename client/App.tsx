import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Moods from './components/Moods';
import Create from './components/Create';
import Account from './components/Account';
import Navbar from './components/Navbar';

export default function App(): JSX.Element {
    const [username, setUsername] = useState('Account');

    useEffect(() => {
		fetch('/api/playlist')
		  .then(res => (
			res.json()
		  ))
		  .then(data => {
			setUsername(data.username)
		  })
	  }, [])

    return (
            <Router>
            <Navbar username={username}/>
                <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/create' element={<Create username={username}/>} />
                    <Route path='/moods' element={<Moods username={username}/>} />
                    <Route path='/account' element={<Account username={username}/>} />
                </Routes>
            </Router>
    )
};