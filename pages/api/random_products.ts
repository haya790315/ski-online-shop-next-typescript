import type { NextApiRequest, NextApiResponse } from "next";
import { fetchMongoDbCollection } from "lib/fetcher/fetchMongoDbCollection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;

    if (method === "GET") {
      const collection = await fetchMongoDbCollection();
      const aggregation = [
        {
          $sample: {
            size: 10,
          },
        },
      ];
      const randomProduct = await collection.aggregate(aggregation).toArray();

      res.status(200).json({
        confirmation: "success",
        result: randomProduct,
      });
    } else {
      res.status(400).json({
        confirmation: "fail",
        message: "forbidden request",
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({
        confirmation: "fail",
        message: err.message,
      });
  }
}
