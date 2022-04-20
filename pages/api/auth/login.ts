import nc from "next-connect";
import dbConnect from "lib/mongodb/mongoose";
import { userLogin } from "controllers/userController";
import { NextApiRequest, NextApiResponse } from "next";
import {onError,onNoMatch} from "lib/util/nextConnectHandler";
import protectAPI from "middleware/protectApi";

//this api is for testing

const handler = nc<NextApiRequest, NextApiResponse>({ onError,onNoMatch });

dbConnect();

handler.use(protectAPI).post(userLogin);


export default handler;