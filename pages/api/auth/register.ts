import nc from "next-connect";
import { newUser } from "controllers/userController";
import { NextApiRequest, NextApiResponse } from "next";
import onError from "lib/util/errorHandler";

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

handler.post(newUser);

export default handler;
