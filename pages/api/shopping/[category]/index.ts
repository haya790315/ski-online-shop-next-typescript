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
      //find by category
      const categoryData = await collection.find({
        category,
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

      // check if category available
      dataList.length
        ? res.status(200).json({
            confirmation: "success",
            result: dataList,
          })
        : res.status(404).json({
            confirmation: "fail",
            message: "no product available please try other category",
          });
    } else {
      res.status(405).json({
        confirmation: "fail",
        message: "forbidden request",
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({
        confirmation: "fail",
        message: "can't get product from server please try later",
      });
  }
}
