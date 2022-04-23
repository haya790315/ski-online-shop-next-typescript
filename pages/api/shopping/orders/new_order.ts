import nc from "next-connect";
import dbConnect from "lib/mongodb/mongoose";
import { newOrder ,getOrder} from "controllers/orderController";
import { NextApiRequest, NextApiResponse } from "next";
import {onError,onNoMatch} from "lib/util/nextConnectHandler";


const handler = nc<NextApiRequest, NextApiResponse>({ onError,onNoMatch});

dbConnect();

handler.get(getOrder)
handler.post(newOrder)


export default handler;