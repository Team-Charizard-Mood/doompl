import { Express, Request, Response, NextFunction } from 'express';

const cookieController = {} as any;

cookieController.setCookie = (req: Request, res: Response, next: NextFunction) => {
    res.cookie('username', res.locals.username);
    res.cookie('refresh_token', res.locals.refresh_token);
    return next();
}

export default cookieController;