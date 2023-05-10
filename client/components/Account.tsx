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
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <Typography></Typography>
      <nav aria-label="main mailbox folders">
        <List sx={{width: '100vw', margin: 'auto', display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center'}}>
        {playlists?.map(playlist => (
            <ListItem disablePadding sx={{width: 500, display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center', border: '2px solid black'}}>
            <Typography variant='h6'>{playlist.name}</Typography>
              <Typography variant='h6'>{playlist.mood}</Typography>
              <ListItemButton>
                <Link to={playlist.url} target='_blank'>{playlist.url}</Link>
              </ListItemButton>
            </ListItem>
          )) as any}
        </List>
      </nav>
    </Box>
  );
}