// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "lib/mongodb/mongodb";
import { IProductData } from "type/type";

type Data = IProductData[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data|{message: string}>
) {
  try {
    const {
      method,
      query: { category, sort },
    } = req;
    if (method === "GET") {
      // Get data from mongodb

      const client = await clientPromise;

      const db = await client.db(process.env.MONGODB_NAME);
      const collection = await db.collection(process.env.MONGODB_COLLECTION);

      const filterCategory = {
        $match: {
          category: {
            $eq: category,
          },
        },
      };
      const pricePipeline =
        sort === "asc"
          ? {
              $sort: {
                price: 1,
              },
            }
          : {
              $sort: {
                price: -1,
              },
            };

      const pipeline:any = [filterCategory];
      if (sort) {
        pipeline.push(pricePipeline);
      }

      const categorizedDb = await collection.aggregate(pipeline).toArray();

      res.status(200).json(categorizedDb);
      
    } else {
      res.status(404).json({ message: "only get method allowable" });
    }
  } catch (err) {
    console.log(err);
  }
}
