// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchMongoDbCollection } from "lib/fetcher/fetchMongoDbCollection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      method,
      query: { category, sort },
    } = req;
    if (method === "GET") {
      // Get collection Data from mongodb
      const collection = await fetchMongoDbCollection();
      //filter by category
      const categoryData = await collection.find({
        category: { $eq: category },
      });

      // sort by price
      if (sort) {
        switch (sort) {
          case "asc":
            categoryData.sort({ price: 1 });
            break;
          case "des":
            categoryData.sort({ price: -1 });
            break;
          default:
            categoryData.sort({ price: 1 });
        }
      }

      const dataList = await categoryData.toArray();

      res.status(200).json({
        confirmation: "success",
        result: dataList,
      });
    } else {
      throw new Error("wrong request");
    }
  } catch (err) {
    console.error("no response", err);
  }
}
