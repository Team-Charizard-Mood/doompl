import { Express, Request, Response, NextFunction } from 'express';

const cookieController = {} as any;

cookieController.setCookie = (req: Request, res: Response, next: NextFunction) => {
    res.cookie('id', res.locals.username);
    return next();
}

export default cookieController;