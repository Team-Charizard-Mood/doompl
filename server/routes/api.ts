import express, { Express, Request, Response, NextFunction, ErrorRequestHandler, Router } from 'express';
import playlistRouter from './playlist';
import userController from '../controllers/userController'; 
import cookieController from '../controllers/cookieController';

const router = express.Router();

router.use('/playlist', playlistRouter);

// Login
router.get('/login', userController.logIn, (req: Request, res: Response) => {
	res.sendStatus(400);
});

router.get('/auth', userController.callback, userController.createUser, cookieController.setCookie, (req: Request, res: Response) => {
	res.redirect('/create');
});

export default router;