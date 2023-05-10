import React, {useState} from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Create(): JSX.Element {
	const [playlistName, setPlaylistName] = useState('');
	return (
		<Box sx={{margin: 'auto', width: '50vw', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
      	<Typography sx={{fontSize: 28, fontWeight: 900}}>Create Your Playlist</Typography>
				<TextField value={playlistName} sx={{width: '60vh'}} onChange={(e) => setPlaylistName(e.target.value)} id="outlined-basic" label="Name your playlist" variant="outlined" />
				<Link to='/moods' state={{ playlistName: playlistName }}><Button variant='text'>Create Playlist</Button></Link>
		</Box>
	)
}