import clientPromise from "../mongodb/mongodb";
import type {IProductData} from "type/type"

export const fetchMongoDbCollection = async () => {
  const client = await clientPromise;
  const db = await client.db(process.env.MONGODB_NAME);
  const response = await db
    .collection(process.env.MONGODB_COLLECTION as string)
    .find({})
    .toArray();

  const data = JSON.parse(JSON.stringify(response))  as IProductData[]

  return data;
};
