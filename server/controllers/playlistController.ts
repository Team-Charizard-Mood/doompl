import { Express, Request, Response, NextFunction } from 'express';
import query from '../models/userModel';
import querystring from 'querystring';

const playlistController = {} as any;

playlistController.getRecommendations = async (req: Request, res: Response, next: NextFunction) => {
    const { access_token } = res.locals;
    const { playlistName, mood, recommendationQuery  } = req.body; 
    // console.log('req.body', recommendationQuery);

    const recommendationList = await fetch('https://api.spotify.com/v1/recommendations?' + querystring.stringify(recommendationQuery), {
        headers: {
            Authorization: "Bearer " + access_token,         
            "Content-Type": "application/x-www-form-urlencoded",
        }
    });
    const decodedRecommendationList = await recommendationList.json();
    // console.log("decoded: ", decodedRecommendationList);
    res.locals.decodedRecommendationList = decodedRecommendationList;
    res.locals.mood = mood;
    res.locals.playlistName = playlistName;
    return next();
}

playlistController.createPlaylist = async (req: Request, res: Response, next: NextFunction) => {
    const { access_token, mood, playlistName } = res.locals;
    const { username } = req.cookies;

    const playListDetails = JSON.stringify({
        name: playlistName,
        description: 'Made by doompl - ' + mood,
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

    const {id, external_urls: spotify} = await playlist.json();; 

    const songUris = [];
    for (const el of res.locals.decodedRecommendationList.tracks) {
        songUris.push(el.uri);
    }
    console.log(songUris);
    const itemsForPlaylist: any = JSON.stringify({ uris: songUris, position: 0 })
    const trackResponse = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        method: 'POST',
        headers: {
            Authorization: "Bearer " + access_token,         
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: itemsForPlaylist   
    });
    const trackResponseJson = await trackResponse.json();
    res.locals.url = spotify.spotify;

    console.log('mood:', mood, 'spotify: ', spotify);

    const addPlaylistQuery = `INSERT INTO Playlists (mood, url, name, username) VALUES ('${mood}','${spotify.spotify}','${playlistName}','${username}')`;
    query(addPlaylistQuery);
    return next();
}

playlistController.getPlaylists = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.cookies;

    const getPlaylistQuery = `SELECT mood, url, name FROM Playlists JOIN Users ON Users.username = Playlists.username WHERE Users.username = '${username}'`;
    const playlists = await query(getPlaylistQuery);
    res.locals.playlists = playlists.rows;
    res.locals.username = username;
    return next();
}

export default playlistController;