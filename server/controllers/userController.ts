import { Express, Request, Response, NextFunction } from "express";
import query from "../models/userModel";
import querystring from "querystring";

const clientId = "421affcdfd2342e6a75ef5a02502430b";
const clientSecret = "e76eb2dcef0c48aa8856d40cc4fc1483";
const redirectUri = "http://localhost:8080/api/auth";

const userController = {} as any;

userController.logIn = function (
  req: Request,
  res: Response,
  next: NextFunction
) {};

userController.callback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const code = req.query.code || null;
    const state = req.query.state || null;

    if (state === null) {
      res.redirect(
        "/#" +
          querystring.stringify({
            error: "state_mismatch",
          })
      );
    } else {
      const data: any = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(clientId + ":" + clientSecret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
          grant_type: "authorization_code",
          code: code as string,
          redirect_uri: redirectUri,
        }) as any,
      });
      const json: any = await data.json();
      res.locals.access_token = json.access_token;
      res.locals.refresh_token = json.refresh_token;
      console.log("data: ", json);

      const userData = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + json.access_token,
        },
      });
      const userJSON = await userData.json();
      res.locals.username = userJSON.id;
      console.log("user data --------> ", userJSON);
      return next();
    }
  } catch (err) {
    return next({
      log: "Error in userController.callback: " + err,
      status: 500,
      message: { err: "An error occurred in userController.callback" },
    });
  }
};

userController.createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = res.locals;
    const findUser = `SELECT FROM Users WHERE Users.username = '${username}'`;
    const response = await query(findUser);
    if (response.rowCount) return next();

    const insertUser = `INSERT INTO Users (username) VALUES ($1)`;
    const insertQuery = {
      name: "insertUser",
      text: insertUser,
      values: [username],
    };
    query(insertQuery);
    return next();
  } catch (err) {
    return next({
      log: "Error in userController.createUser: " + err,
      status: 500,
      message: { err: "An error occurred in userController.createUser" },
    });
  }
};

userController.getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const { refresh_token } = req.cookies;

  const data: any = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(clientId + ":" + clientSecret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
          grant_type: "refresh_token",
          refresh_token: refresh_token,
        }) as any,
      });
  const json: any = await data.json();
  console.log('access token:', json.access_token);
  res.locals.access_token = json.access_token;
  return next();
  } catch (err) {
    return next({
      log: "Error in userController.getUser: " + err,
      status: 500,
      message: { err: "An error occurred in userController.getUser" },
    });
  }
}

export default userController;
