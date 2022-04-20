import nc from "next-connect";
import dbConnect from "lib/mongodb/mongoose";
import { newUser, checkUserEmailExisted } from "controllers/userController";
import { NextApiRequest, NextApiResponse } from "next";
import {onError,onNoMatch} from "lib/util/nextConnectHandler";
import protectAPI from "middleware/protectApi";

const handler = nc<NextApiRequest, NextApiResponse>({ onError,onNoMatch});

dbConnect();
handler.use(protectAPI).post(newUser).get(checkUserEmailExisted);

export default handler;
