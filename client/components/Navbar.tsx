import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar({username}): JSX.Element {
	return (
		<Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' elevation={0} sx={{ background: 'none'}}>
        <Toolbar>
          <Typography fontFamily='Montserrat' variant='h6' component='div' sx={{ flexGrow: 1, fontSize: '24px', fontWeight: '600', color: '#7390FB'}}>
            doompl
          </Typography>
          <Link to='/create'><Button variant='text'><Typography fontFamily='Montserrat'>Create Playlist</Typography></Button></Link>
					<Link to='/account'><Button variant='text'><Typography fontFamily='Montserrat'>{username}</Typography></Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
	)
}