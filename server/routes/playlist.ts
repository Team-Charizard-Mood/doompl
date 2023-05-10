import express, { Express, Request, Response, NextFunction, ErrorRequestHandler, Router } from 'express';
import playlistController from '../controllers/playlistController';
import userController from '../controllers/userController';

const router = express.Router();

// Get all playlists
router.get('/', playlistController.getPlaylists, (req, res) => {
    res.json(res.locals.playlists);
})

// Create new playlist
router.post('/', userController.getUser, playlistController.getRecommendations, playlistController.createPlaylist, (req: Request, res: Response) => {
    res.json(res.locals.url)
})

// Delete playlist
router.delete('/',)

export default router;