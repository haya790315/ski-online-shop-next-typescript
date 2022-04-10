import nc from "next-connect";
import { updateUser } from "controllers/userController";
import { NextApiRequest, NextApiResponse } from "next";
import onError from "lib/util/onError";

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

handler.patch(updateUser);

export default handler;
