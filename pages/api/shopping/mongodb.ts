// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "lib/mongodb/mongodb";

type Data = {
  id: string;
  brand: string;
  name: string;
  model: string;
  price: string;
  option: string[];
  gender: string;
  imageURL: string;
  picture: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  try {
    const { method } = req;
    if (method === "GET") {
      // Get data from mongodb
      const client = await clientPromise;

      const db = await client.db(process.env.MONGODB_Name);

      const response = await db.collection("All_Products").find({}).toArray();
      
      const data = JSON.parse(JSON.stringify(response));

      res.status(200).json(data)
      // res.status(200).json({ dbName: client.db().databaseName })

    } else {
      res.status(404).json({ message: "not get method" });
    }
  } catch (err) {
    res.status(500).json({ message: "no data" });
  }
}
