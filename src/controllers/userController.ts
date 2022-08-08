import { NextFunction, Request, Response } from "express";

import * as userService from '../services/userServices';


export const getAllUsers = (req:Request,res:Response,next:NextFunction) => {
    userService.getAllUsers()
    .then((data) => res.json(data))   //success condition
    .catch((err) => next(err));
};