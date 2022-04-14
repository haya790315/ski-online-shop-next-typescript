import userSchema from "../model/userSchema";
import { NextApiRequest, NextApiResponse } from "next";

const newUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await userSchema.create(req.body);
  res.status(201).json({
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

  res.status(200).json({
    success: true,
    updateUser,
  });
};

const userLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await userSchema.findOne({
      email: req.query.email,
      password: req.query.password,
    });
    if (!user) {
      res
        .status(202)
        .json({
          success: false,
          message: "メールアドレス、もしくはパスワードが間違っています。",
        });
    } else {
      res.status(200).json({
        success: true,
        result: user,
      });
    }
  } catch (err) {
    console.error(err);
  }
};


const checkUserEmailExcited= async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await userSchema.findOne({
      email: req.query.email,
    });
    if (user) {
      res
        .status(200)
        .json({
          success: true,
          message: "メールアドレスは既に存在します",
        });
    } else {
      res
        .status(202)
        .json({
          success: false,
          message: "メールアドレスは有効です",
        });
    }
  } catch (err) {
    console.error(err);
  }
};

export { newUser, updateUser, userLogin,checkUserEmailExcited };
