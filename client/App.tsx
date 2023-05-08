import React from 'react';
import Login from './components/Login';
import { Box } from '@mui/material';
import Moods from './components/Moods';
import Create from './components/Create';

export default function App() {
    return (
        <Box sx={{margin: 'auto'}}>
            {/* <Login /> */}
            {/* <Create /> */}
            <Moods />
        </Box>
    )
};