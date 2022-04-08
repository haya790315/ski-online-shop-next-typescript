import clientPromise from "../mongodb/mongodb";

export const fetchMongoDbCollection = async () => {
  const client = await clientPromise;
  const db = await client.db(process.env.MONGODB_NAME);
  const collection = await db
    .collection(process.env.MONGODB_COLLECTION as string)

  // const data = JSON.parse(JSON.stringify(response))  as IProductData[]

  return collection;
};
