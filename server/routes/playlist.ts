import express, { Express, Request, Response, NextFunction, ErrorRequestHandler, Router } from 'express';
import playlistController from '../controllers/playlistController';
import userController from '../controllers/userController';

const router = express.Router();

// Get all playlists
router.get('/',)

// Create new playlist
router.post('/', userController.getUser, playlistController.getRecommendations, playlistController.createPlaylist, (req: Request, res: Response) => {
    res.sendStatus(200)
})

// Delete playlist
router.delete('/',)

export default router;