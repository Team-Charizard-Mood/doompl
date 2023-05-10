import { Express, Request, Response, NextFunction } from 'express';
import query from '../models/userModel';
import querystring from 'querystring';

const playlistController = {} as any;

playlistController.getRecommendations = async (req: Request, res: Response, next: NextFunction) => {
    const { access_token } = res.locals;
    // const { max_acousticness, max_danceability } = req.body; 

    const recommendationQuery = querystring.stringify({
        seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
        seed_genres: 'classical',
        seed_tracks: '0c6xIDDpzE81m2q797ordA',
        max_acousticness: 0.35,
        max_danceability: 0.35,
    })

    const recommendationList = await fetch('https://api.spotify.com/v1/recommendations?' + recommendationQuery, {
        headers: {
            Authorization: "Bearer " + access_token,         
            "Content-Type": "application/x-www-form-urlencoded",
        }
    });
    const decodedRecommendationList = await recommendationList.json();
    // console.log(decodedRecommendationList);
    res.locals.decodedRecommendationList = decodedRecommendationList;
    return next();
}

playlistController.createPlaylist = async (req: Request, res: Response, next: NextFunction) => {
    const { access_token } = res.locals;
    const { username } = req.cookies;

    const playListDetails = JSON.stringify({
        name: 'Charizard',
        description: 'New playlist description',
        public: false
    });
    const playlist = await fetch(`https://api.spotify.com/v1/users/${username}/playlists`, {
        method: 'POST',
        headers: {
            Authorization: "Bearer " + access_token,         
            "Content-Type": "application/json",
        },
        body: playListDetails
    });

    const x = await playlist.json(); 

    const {id} = x; 

    const songUris = [];
    for (const el of res.locals.decodedRecommendationList.tracks) {
        songUris.push(el.uri);
    }
    console.log(songUris);
    const itemsForPlaylist: any = JSON.stringify({ uris: songUris, position: 0 })
    const y = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        method: 'POST',
        headers: {
            Authorization: "Bearer " + access_token,         
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: itemsForPlaylist   
    })
    const z = await y.json();
    console.log(z);
    res.locals.url = x.external_urls.spotify;
    return next();
}

export default playlistController;