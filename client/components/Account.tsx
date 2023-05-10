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

export default function BasicList() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch('/api/playlist')
      .then(res => (
        res.json()
      ))
      .then(data => {
        setPlaylists(data as any)
      })
  }, [])

  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <nav aria-label="main mailbox folders">
        <List>
        {playlists?.map(playlist => (
            <ListItem disablePadding>
            <Typography>{playlist.name}</Typography>
              <Typography>{playlist.mood}</Typography>
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