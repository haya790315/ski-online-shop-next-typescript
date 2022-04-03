import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "lib/mongodb/mongodb";
import { IProductData } from "type/ProductType";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProductData[]>
) {
  try {
    const { method } = req;

    if (method === "GET") {
      const client = await clientPromise;
      const db = await client.db(process.env.MONGODB_NAME);
      const collection = await db.collection(
        process.env.MONGODB_COLLECTION as string
      );

      const aggregation = [
        {
          $sample: {
            size: 10,
          },
        },
      ];

      const randomProduct = (await collection
        .aggregate(aggregation)
        .toArray()) as IProductData[];

      res.status(200).json(randomProduct);
    } else {
      throw new Error("wrong request");
    }
  } catch (err) {
    console.log(err);
  }
}
