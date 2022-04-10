import nc from "next-connect";
import { updateUser } from "controllers/userController";
import dbConnect from "lib/mongodb/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import onError from "lib/util/onError";

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

dbConnect().then(() => {
  handler.patch(updateUser);
});

export default handler;
