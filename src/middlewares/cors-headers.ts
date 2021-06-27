
import express from 'express';
export const enableCorsHeaders = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  //Enabling CORS 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization, X-Client-Version");
  next();
}