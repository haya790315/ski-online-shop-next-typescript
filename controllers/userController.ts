import userSchema from "../model/userSchema";
import { NextApiRequest, NextApiResponse } from "next";

const newUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await userSchema.create(req.body);
  res.status(200).json({
    success: true,
    user,
  });
};

const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const updateUser = await userSchema.findOneAndUpdate(
    { _id: req.query.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    success: true,
    updateUser,
  });
};

const findUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const userInfo = await userSchema.findById(req.query.id);

  if (!userInfo) {
    res.status(404).json({ success: false, message: "User not found" });
  }

  res.status(201).json({
    success: true,
    userInfo,
  });
};

export { newUser, updateUser, findUser };
