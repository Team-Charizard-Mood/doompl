import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useLocation } from 'react-router';

export default function Moods(): JSX.Element {
	const { state } = useLocation() as any;
	const { playlistName } = state;

	const defaultParams = {
		market: 'US',
		target_popularity: '80',
	}
	
	const happy = {
		seed_artists: '2RdwBSPQiwcmiDo9kixcl8',
		seed_tracks: '1cH4YlAyj4dtofkNil6iGl',
		seed_genres: 'dance,electronic,pop,happy',
		target_energy: '0.6',
		target_danceability: '0.6'
	}

	
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
				<Button>On a Drive</Button>
				<Button>Study</Button>
				<Button>Party</Button>
				<Button>Surprise</Button>
      </Box>
	)
}


/*
ENDPOINT
https://api.spotify.com/v1/recommendations
limit
10
market
ES
seed_artists
4NHQUGzhtTLFvgF5SZesLK
seed_genres
classical
seed_tracks
0c6xIDDpzE81m2q797ordA
min_acousticness
max_acousticness
target_acousticness
min_danceability
max_danceability
target_danceability
min_duration_ms
max_duration_ms
target_duration_ms
min_energy
max_energy
target_energy
min_instrumentalness
max_instrumentalness
target_instrumentalness
min_key
max_key
target_key
min_liveness
max_liveness
target_liveness
min_loudness
max_loudness
target_loudness
min_mode
max_mode
target_mode
min_popularity
max_popularity
target_popularity
min_speechiness
max_speechiness
target_speechiness
min_tempo
max_tempo
target_tempo
min_time_signature
max_time_signature
target_time_signature
min_valence
max_valence
target_valence
*/


/*
"genres": [
        "acoustic",
        "afrobeat",
        "alt-rock",
        "alternative",
        "ambient",
        "anime",
        "black-metal",
        "bluegrass",
        "blues",
        "bossanova",
        "brazil",
        "breakbeat",
        "british",
        "cantopop",
        "chicago-house",
        "children",
        "chill",
        "classical",
        "club",
        "comedy",
        "country",
        "dance",
        "dancehall",
        "death-metal",
        "deep-house",
        "detroit-techno",
        "disco",
        "disney",
        "drum-and-bass",
        "dub",
        "dubstep",
        "edm",
        "electro",
        "electronic",
        "emo",
        "folk",
        "forro",
        "french",
        "funk",
        "garage",
        "german",
        "gospel",
        "goth",
        "grindcore",
        "groove",
        "grunge",
        "guitar",
        "happy",
        "hard-rock",
        "hardcore",
        "hardstyle",
        "heavy-metal",
        "hip-hop",
        "holidays",
        "honky-tonk",
        "house",
        "idm",
        "indian",
        "indie",
        "indie-pop",
        "industrial",
        "iranian",
        "j-dance",
        "j-idol",
        "j-pop",
        "j-rock",
        "jazz",
        "k-pop",
        "kids",
        "latin",
        "latino",
        "malay",
        "mandopop",
        "metal",
        "metal-misc",
        "metalcore",
        "minimal-techno",
        "movies",
        "mpb",
        "new-age",
        "new-release",
        "opera",
        "pagode",
        "party",
        "philippines-opm",
        "piano",
        "pop",
        "pop-film",
        "post-dubstep",
        "power-pop",
        "progressive-house",
        "psych-rock",
        "punk",
        "punk-rock",
        "r-n-b",
        "rainy-day",
        "reggae",
        "reggaeton",
        "road-trip",
        "rock",
        "rock-n-roll",
        "rockabilly",
        "romance",
        "sad",
        "salsa",
        "samba",
        "sertanejo",
        "show-tunes",
        "singer-songwriter",
        "ska",
        "sleep",
        "songwriter",
        "soul",
        "soundtracks",
        "spanish",
        "study",
        "summer",
        "swedish",
        "synth-pop",
        "tango",
        "techno",
        "trance",
        "trip-hop",
        "turkish",
        "work-out",
        "world-music"
*/
