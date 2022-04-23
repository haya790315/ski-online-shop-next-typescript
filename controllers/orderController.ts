import Orders from "../model/orderSchema";
import { NextApiRequest, NextApiResponse } from "next";
import Products from "model/productSchema"


const newOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const order = await Orders.create(req.body);
    res.status(201).json({
      success: true,
      order,
    });
  } catch (err) {
    res.status(500).send(err)
    console.error(err);
  }
};


const getOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const order = await Orders.find().populate({path:"items.product",model:Products})
    res.status(201).json({
      success: true,
      order,
    });
  } catch (err) {
    res.status(500).send(err)
    console.error(err);
  }
};





export {
  newOrder,getOrder
}