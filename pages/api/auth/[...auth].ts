import nc from "next-connect";
import { updateUser } from "controllers/userController";
import dbConnect from "lib/mongodb/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import {onError,onNoMatch} from "lib/util/nextConnectHandler";

const handler = nc<NextApiRequest, NextApiResponse>({ onError,onNoMatch });

dbConnect();
handler.patch(updateUser);

export default handler;
