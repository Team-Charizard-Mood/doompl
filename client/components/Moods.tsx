import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function Moods({ username }): JSX.Element {
	const { state } = useLocation() as any;
	const { playlistName } = state;
	const [playlistUrl, setPlaylistUrl] = useState('');

	const defaultParams = {
		market: 'US',
		target_popularity: '80',
	};

	const moods = {
		happy: {
			seed_artists: '6sFIWsNpZYqfjUpaCgueju',
			seed_tracks: '1cH4YlAyj4dtofkNil6iGl',
			seed_genres: 'dance,pop,happy',
			target_energy: '0.6',
			target_danceability: '0.6',
		},

		sad: {
			seed_artists: '6qqNVTkY8uBg9cP3Jd7DAH',
			seed_tracks: '08k2iMu7BkMTsJV6MkJVxO',
			seed_genres: 'sad,emo',
			target_energy: '0.2',
			target_danceability: '0',
		},

		chill: {
			seed_artists: '5JZ7CnR6gTvEMKX4g70Amv',
			seed_tracks: '2MOoIbJWIYikwIXjBDe26i,5wxYxygyHpbgv0EXZuqb9V',
			seed_genres: 'chill,ambient',
			target_energy: '0.4',
			target_danceability: '0.4',
		},

		sleep: {
			seed_artists: '0iwtwRDn1bcb5lbOsFfoFc',
			seed_tracks: '5u5aVJKjSMJr4zesMPz7bL',
			seed_genres: 'sleep,ambient',
			target_energy: '0.2',
			target_instrumentalness: '0.8',
			target_loudness: '0.1',
		},

		workout: {
			seed_artists: '66CXWjxzNUsdJxJ2JdwvnR',
			seed_tracks: '2xLMifQCjDGFmkHkpNLD9h',
			seed_genres: 'hip-hop,pop',
			target_energy: '0.7',
			target_danceability: '0.5',
		},

		angry: {
			seed_artists: '4tususHNaR68xdgLstlGBA',
			seed_tracks: '5OlieB5VdsOMuBuCtllXGW',
			seed_genres: 'alternative,rock,heavy-metal',
			target_energy: '0.7',
			target_loudness: '0.6',
		},

		drive: {
			seed_artists: '0du5cEVh5yTK9QJze8zA0C',
			seed_tracks: '7gF9RfiO8nBhFhBkLuiUrb',
			seed_genres: 'pop,hip-hop,road-trip',
			target_energy: '0.6',
			target_danceability: '0.5',
		},

		study: {
			seed_artists: '1dABGukgZ8XKKOdd2rVSHM',
			seed_tracks: '02lD05wrDhtJVJkQELhwkt',
			seed_genres: 'study,ambient,chill',
			target_energy: '0.3',
			target_loudness: '0.3',
			target_instrumentalness: '0.5',
		},

		party: {
			seed_artists: '64KEffDW9EtZ1y2vBYgq8T',
			seed_tracks: '76hfruVvmfQbw0eYn1nmeC',
			seed_genres: 'dance,party,electronic',
			target_energy: '0.9',
			target_danceability: '0.9',
			target_loudness: '0.7',
		},

		surprise: {
			seed_artists: '0HdNDZaNm7xLt18v9aWDfe',
			seed_tracks: '2pNtlK4DkAxwYpX0Sp2sgn',
			seed_genres: 'trip-hop,disney,minimal-techno',
		},
	};

	async function handleClick(mood) {
		const params = Object.assign(defaultParams, moods[mood]);
		const res = await fetch('/api/playlist', {
			method: 'POST',
			body: JSON.stringify({
				recommendationQuery: params,
				mood,
				playlistName
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		setPlaylistUrl(data)
	}

	return (
		<Box sx={{ margin: '120px auto', width: '30vw', textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
			<Typography fontFamily='Montserrat' sx={{ fontSize: 40, fontWeight: 900 }}>
				Moods/Situations
			</Typography>
			<Typography fontFamily='Montserrat' sx={{ marginBottom: '30px' }}>Choose what you're feeling &#127925;</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
				<Button onClick={() => handleClick('happy')}><Typography fontFamily='Montserrat' sx={{fontWeight: 500}}>Happy</Typography></Button>
				<Button onClick={() => handleClick('sad')}><Typography fontFamily='Montserrat' sx={{fontWeight: 500}}>Sad</Typography></Button>
				<Button onClick={() => handleClick('chill')}><Typography fontFamily='Montserrat' sx={{fontWeight: 500}}>Chill</Typography></Button>
				<Button onClick={() => handleClick('sleep')}><Typography fontFamily='Montserrat' sx={{fontWeight: 500}}>Sleep</Typography></Button>
				<Button onClick={() => handleClick('workout')}><Typography fontFamily='Montserrat' sx={{fontWeight: 500}}>Workout</Typography></Button>
				<Button onClick={() => handleClick('angry')}><Typography fontFamily='Montserrat' sx={{fontWeight: 500}}>Angry</Typography></Button>
				<Button onClick={() => handleClick('drive')}><Typography fontFamily='Montserrat' sx={{fontWeight: 500}}>Drive</Typography></Button>
				<Button onClick={() => handleClick('study')}><Typography fontFamily='Montserrat' sx={{fontWeight: 500}}>Study</Typography></Button>
				<Button onClick={() => handleClick('party')}><Typography fontFamily='Montserrat' sx={{fontWeight: 500}}>Party</Typography></Button>
				<Button onClick={() => handleClick('surprise')}><Typography fontFamily='Montserrat' sx={{fontWeight: 500}}>Surprise</Typography></Button>
			<Typography fontFamily='Montserrat' sx={{ marginTop: '10px', fontSize: '20px' }}><Link style={{ textDecoration: 'none' }} to={playlistUrl} target='_blank'>{playlistUrl}</Link></Typography>
			</Box>
		</Box>
	);
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
'genres': [
				'acoustic',
				'afrobeat',
				'alt-rock',
				'alternative',
				'ambient',
				'anime',
				'black-metal',
				'bluegrass',
				'blues',
				'bossanova',
				'brazil',
				'breakbeat',
				'british',
				'cantopop',
				'chicago-house',
				'children',
				'chill',
				'classical',
				'club',
				'comedy',
				'country',
				'dance',
				'dancehall',
				'death-metal',
				'deep-house',
				'detroit-techno',
				'disco',
				'disney',
				'drum-and-bass',
				'dub',
				'dubstep',
				'edm',
				'electro',
				'electronic',
				'emo',
				'folk',
				'forro',
				'french',
				'funk',
				'garage',
				'german',
				'gospel',
				'goth',
				'grindcore',
				'groove',
				'grunge',
				'guitar',
				'happy',
				'hard-rock',
				'hardcore',
				'hardstyle',
				'heavy-metal',
				'hip-hop',
				'holidays',
				'honky-tonk',
				'house',
				'idm',
				'indian',
				'indie',
				'indie-pop',
				'industrial',
				'iranian',
				'j-dance',
				'j-idol',
				'j-pop',
				'j-rock',
				'jazz',
				'k-pop',
				'kids',
				'latin',
				'latino',
				'malay',
				'mandopop',
				'metal',
				'metal-misc',
				'metalcore',
				'minimal-techno',
				'movies',
				'mpb',
				'new-age',
				'new-release',
				'opera',
				'pagode',
				'party',
				'philippines-opm',
				'piano',
				'pop',
				'pop-film',
				'post-dubstep',
				'power-pop',
				'progressive-house',
				'psych-rock',
				'punk',
				'punk-rock',
				'r-n-b',
				'rainy-day',
				'reggae',
				'reggaeton',
				'road-trip',
				'rock',
				'rock-n-roll',
				'rockabilly',
				'romance',
				'sad',
				'salsa',
				'samba',
				'sertanejo',
				'show-tunes',
				'singer-songwriter',
				'ska',
				'sleep',
				'songwriter',
				'soul',
				'soundtracks',
				'spanish',
				'study',
				'summer',
				'swedish',
				'synth-pop',
				'tango',
				'techno',
				'trance',
				'trip-hop',
				'turkish',
				'work-out',
				'world-music'
*/
