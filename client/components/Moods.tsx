import React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';


export default function Moods() {
	return (
		<Box sx={{margin: 'auto', width: '50vw', textAlign: 'center'}}>
      	<Typography sx={{fontSize: 28, fontWeight: 900}}>Moods/Situations</Typography>
        <Typography>Choose what you're feeling &#127925;</Typography>
				<Button>Happy</Button>
				<Button>Sad</Button>
				<Button>Chill</Button>
				<Button>Sleep</Button>
				<Button>Workout</Button>
				<Button>Angry</Button>
      </Box>
	)
}