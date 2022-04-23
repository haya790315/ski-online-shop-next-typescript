import type { NextApiRequest, NextApiResponse } from "next";
import { fetchMongoDbCollection } from "lib/fetcher/fetchMongoDbCollection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(201).json({
    success: true,
    message: "ok",
  });
}
