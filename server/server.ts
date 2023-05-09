import express, { Express, Request, Response, NextFunction, ErrorRequestHandler, Router } from 'express';
import cookieParser from 'cookie-parser';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const router: Router = express.Router();
app.use('/api', router);

// app.get('/', (req: Request, res: Response) => {
//   res.json('Server says Hello, World!');
// });

type GlobalErrorType = {
  log: string;
  status: number;
  message: {
    err: string;
  }
}

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: GlobalErrorType = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj: GlobalErrorType = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});