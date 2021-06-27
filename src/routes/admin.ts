import express, { Router } from "express";
import verifyAdminToken from "../middlewares/verify-admin-token";

const adminRouter: express.Router = Router();


export default adminRouter;