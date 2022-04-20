import { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";

const protectAPI = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {

  if (
    req.method === "POST" &&
    req.headers.authorization !==  process.env.NEXT_PUBLIC_API_TOKEN
  ) {
    return res
      .status(401)
      .json({ success: false, message: "not authorized API Token" });
  }

  if (
    req.method === "GET" &&
    req.query.apikey !== process.env.NEXT_PUBLIC_API_KEY
  ) {
    return res
      .status(401)
      .json({ success: false, message: "not a valid API Key" });
  }

  next();
};

export default protectAPI;
