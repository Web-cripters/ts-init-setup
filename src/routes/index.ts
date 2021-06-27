import express, { Router } from 'express';
import adminRouter from './admin';

// Initializing the index router 
const indexRouter: express.Router = Router();

// Configuring index router with sub routers
indexRouter.use('/admin', adminRouter)

// exporting the router
export default indexRouter;