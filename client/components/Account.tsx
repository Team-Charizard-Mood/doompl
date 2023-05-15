import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Account({username}) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch('/api/playlist')
      .then(res => (
        res.json()
      ))
      .then(data => {
        setPlaylists(data.playlists as any)
      })
  }, [])

  return (
    <Box sx={{ marginTop: '100px', width: '100%', maxWidth: '100%' }}>
      <Typography fontFamily='Montserrat' sx={{textAlign: 'center', fontSize: '28px', fontWeight: '600'}}>hi, {username}! &#129312;</Typography>
      <Typography fontFamily='Montserrat' sx={{textAlign: 'center', fontSize: '18px', fontWeight: '500', marginBottom: '20px'}}>here are your past playlists:</Typography>
        <List sx={{width: '80vw', margin: 'auto', display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center'}}>
        {playlists?.map(playlist => (
            <ListItem sx={{width: 520, display: 'flex', flexDirection: 'column', textAlign: 'center', border: '1.5px solid #7390FB'}}>
            <Typography fontFamily='Montserrat' variant='h6' sx={{fontSize: '20px'}}>{playlist.name}</Typography>
              <Typography fontFamily='Montserrat' variant='h6' sx={{fontSize: '18px'}}>mood: {playlist.mood}</Typography>
              <ListItemButton>
                <Typography fontFamily='Montserrat'><Link style={{textDecoration: 'none'}} to={playlist.url} target='_blank'>{playlist.url}</Link></Typography>
              </ListItemButton>
            </ListItem>
          )) as any}
        </List>
    </Box>
  );
}