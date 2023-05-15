import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Create({username}): JSX.Element {
	const [playlistName, setPlaylistName] = useState('');

	return (
		<Box sx={{margin: '120px auto', width: '50vw', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
      	<Typography fontFamily='Montserrat' sx={{fontSize: 40, fontWeight: 900}}>Create Your Playlist</Typography>
				<TextField value={playlistName} sx={{width: '60vh', fontFamily: 'Montserrat'}} onChange={(e) => setPlaylistName(e.target.value)} id="outlined-basic" label="Name Your Playlist" variant="outlined" />
				<Link to='/moods' state={{ playlistName: playlistName }}><Button variant='text'><Typography fontFamily='Montserrat' sx={{fontSize: 20}}>Create Playlist &#127926;</Typography></Button></Link>
		</Box>
	)
}