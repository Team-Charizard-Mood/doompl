import { Express, Request, Response, NextFunction } from 'express';
import query from '../models/userModel';
import querystring from 'querystring';

const clientId = '421affcdfd2342e6a75ef5a02502430b';
const clientSecret = 'e76eb2dcef0c48aa8856d40cc4fc1483';
const redirectUri = 'http://localhost:8080/api/auth';

function generateRandomString(length: number): string {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const userController = {} as any;

userController.logIn = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';
  //   console.log(querystring.stringify({
  //     response_type: 'code',
  //     client_id: clientId,
  //     scope: scope,
  //     redirect_uri: redirectUri,
  //     state: state,
  //   }));
  res.send(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
      })
  );
};

userController.callback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect(
      '/#' +
        querystring.stringify({
          error: 'state_mismatch',
        })
    );
  } else {
    // let authOptions = {
    //   url: 'https://accounts.spotify.com/api/token',
    //   form: {
    //     code: code,
    //     redirect_uri: redirectUri,
    //     grant_type: 'authorization_code',
    //   },
    //   headers: {
    //     Authorization:
    //       'Basic ' +
    //       new Buffer(clientId + ':' + clientSecret).toString('base64'),
    //   },
    //   json: true,
    // };
    const data: any = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(clientId + ':' + clientSecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
			} as any,
    });
    const json: any = await data.json();
    res.locals.access_token = json.access_token;
    console.log('data: ', json);
    return next();
  }
};

//   }
// };

// userController.refresh = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   let refresh_token = req.query.refresh_token;
//   var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: {
//       Authorization:
//         'Basic ' +
//         new Buffer.from(clientId + ':' + clientSecret).toString('base64'),
//     },
//     form: {
//       grant_type: 'refresh_token',
//       refresh_token: refresh_token,
//     },
//     json: true,
//   };

//   equest.post(authOptions, function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var access_token = body.access_token;
//       res.send({
//         access_token: access_token,
//       });

// const data = await fetch('https://accounts.spotify.com/api/token', {
//   method: 'POST',
//   headers: {
//     Authorization:
//       'Basic ' + new Buffer(clientId + ':' + clientSecret).toString('base64'),
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: JSON.stringify({
//     refresh_token: refresh_token,
//     grant_type: 'refresh_token',
//   }),
// });

// const { access_token } = data;
// if(access_token) {
//   res.status(200);
//   res.json({ success: true, access_token });
// }

// });
// };

export default userController;
