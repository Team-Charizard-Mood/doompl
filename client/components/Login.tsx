import React from 'react';
import { Box, Button, Typography, SvgIcon, Link } from '@mui/material';

const clientId = '421affcdfd2342e6a75ef5a02502430b';
const redirectUri = 'http://localhost:8080/api/auth';

export default function Login(): JSX.Element {
	
	const logo = (
		<svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="100%" fill="currentColor" className="bi bi-spotify" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
</svg>)

function generateRandomString(length: number): string {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const state = generateRandomString(16);
const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';

	const handleLogin = async (): Promise<void> => {
		window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;
	}
	
	return (
		<Box sx={{margin: '100px auto', width: '50vw', textAlign: 'center'}}>
			<Typography sx={{fontSize: 50, fontWeight: 900}}>doompl</Typography>
      <Typography sx={{marginBottom: '50px'}}>Generate a Spotify playlist based on your mood or situation &#128526;</Typography>
			<Button onClick={handleLogin} sx={{display: 'flex', gap: 1, margin: 'auto'}} variant='contained'><Typography>Login with Spotify</Typography><SvgIcon>{logo}</SvgIcon></Button>
		</Box>
	)
}