import nc from "next-connect";
import dbConnect from "lib/mongodb/mongoose";
import { newUser, checkUserEmailExcited } from "controllers/userController";
import { NextApiRequest, NextApiResponse } from "next";
import {onError,onNoMatch} from "lib/util/nextConnectHandler";

const handler = nc<NextApiRequest, NextApiResponse>({ onError,onNoMatch});

dbConnect();
handler.post(newUser);
handler.get(checkUserEmailExcited);

export default handler;
