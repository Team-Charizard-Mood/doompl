import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import { Box } from '@mui/material';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); 
root.render(
    <Box sx={{padding: 0, margin: 0, height: '100vh', background:
        `linear-gradient(lightblue, transparent),
        linear-gradient(to top left, lime, transparent),
        linear-gradient(to top right, blue, transparent)`, backgroundBlendMode: 'screen'}}>
        <App />
    </Box>
);

/*
 background:
        linear-gradient(red, transparent),
        linear-gradient(to top left, lime, transparent),
        linear-gradient(to top right, blue, transparent);
    background-blend-mode: screen;
*/