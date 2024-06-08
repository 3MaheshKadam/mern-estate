import jwt from 'jsonwebtoken';
import {errorHandler} from './error.js'

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token; //token variable to read and acess the thoken created of user

  if (!token) return next(errorHandler(401, 'Unauthorized'));//if !token  : implies user not signin  //or unauthorixed

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => { //verify jwt token
    if (err) return next(errorHandler(403, 'Forbidden'));     //user is signin but is trying to update another user
    //because if user is reached till here tehn it means user has a token(signin) 

    req.user = user;
    next();
  });
};