import express, { Express, Request, Response, NextFunction, ErrorRequestHandler, Router } from 'express';
import playlistRouter from './playlist';
import userController from '../controllers/userController';

const router = express.Router();

router.use('/playlist', playlistRouter);

// Login
router.get('/login', userController.logIn, (req: Request, res: Response) => {
	res.sendStatus(400);
});

router.get('/auth', userController.callback, (req: Request, res: Response) => {
	res.status(200).json(res.locals.access_token);
});

export default router;