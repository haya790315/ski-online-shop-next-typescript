import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "lib/mongodb/mongodb";
import { IProductData } from "type/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProductData[]>
) {
  try {
    const { method } = req;

    if (method === "GET") {
      const client = await clientPromise;
      const db = await client.db(process.env.MONGODB_Name);
      const collection = await db.collection(process.env.MONGODB_Collection);

      const aggregation = [
        {
          $sample: {
            size: 10,
          },
        },
      ];

      const randomProduct = await collection.aggregate(aggregation).toArray();

      res.status(200).json(randomProduct);
    } else {
      res.status(400).json({ message: "only get method allowable" });
    }
  } catch (err) {
    console.log(err);
  }
}
