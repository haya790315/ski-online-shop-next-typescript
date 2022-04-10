import nc from "next-connect";
import dbConnect from "lib/mongodb/mongoose";
import { newUser } from "controllers/userController";

import { NextApiRequest, NextApiResponse } from "next";
import onError from "lib/util/onError";

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

dbConnect().then(() => {
  handler.post(newUser);
});

export default handler;
