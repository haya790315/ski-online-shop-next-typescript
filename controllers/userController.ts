import userSchema from "../model/userSchema";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "lib/mongodb/mongoose";

const newUser = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = await userSchema.create(req.body);

  res.status(200).json({
    confirmation: "success",
    user,
  });
};

const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  // const updateUser = await userSchema.findByIdAndUpdate(req.query.id, req.body, {
  //   new: true,
  //   runValidators: true,
  //   useFindAndModify: false,
  // });

  const updateUser = await userSchema.findById(req.query.id);

  updateUser.password = req.body.password;
  updateUser.userName = req.body.userName;

  await updateUser.save();

  // const updateUser = await userSchema.findOneAndUpdate(
  //   { uerName: req.query.name },
  //   {
  //     $set: { passwordChangeAt: "123"},
  //   }
  // );

  res.status(201).json({
    success: true,
    updateUser,
  });
};

export { newUser, updateUser };
