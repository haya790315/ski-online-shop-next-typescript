import nc from "next-connect";
import dbConnect from "lib/mongodb/mongoose";
import { findUser } from "controllers/userController";
import { NextApiRequest, NextApiResponse } from "next";
import onError from "lib/util/onError";

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

dbConnect();

handler.get(findUser);


export default handler;