import React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';

export default function Create(): JSX.Element {
	return (
		<Box sx={{margin: 'auto', width: '50vw', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 2}}>
      	<Typography sx={{fontSize: 28, fontWeight: 900}}>Create Your Playlist</Typography>
				<TextField id="outlined-basic" label="Name your playlist" variant="outlined" />
				<Button variant='contained'>Create Playlist</Button>
		</Box>
	)
}