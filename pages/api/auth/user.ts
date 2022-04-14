import nc from "next-connect";
import dbConnect from "lib/mongodb/mongoose";
import { userLogin } from "controllers/userController";
import { NextApiRequest, NextApiResponse } from "next";
import {onError,onNoMatch} from "lib/util/nextConnectHandler";

const handler = nc<NextApiRequest, NextApiResponse>({ onError,onNoMatch });

dbConnect();

handler.post(userLogin);


export default handler;