import express from 'express'
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken'

const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction): void => {

  var token = req.headers['x-access-token'] || req.headers['authorization'];
  if (!token)
    res.status(StatusCodes.FORBIDDEN).send({ auth: false, message: 'No token provided.' });

  jwt.verify(String(token), String(process.env.JWT_SECRET), function (err, decoded) {
    if (err)
      res.status(StatusCodes.FORBIDDEN).send({ auth: false, message: 'Failed to authenticate token.' });
    next();
  });

}

export default verifyToken