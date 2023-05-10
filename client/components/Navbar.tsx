import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar(): JSX.Element {
	return (
		<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ background: "none"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black"}}>
            doompl
          </Typography>
          <Link to='/create'><Button variant='text'>Create Playlist</Button></Link>
					<Link to='/account'><Button variant='text'>Account</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
	)
}