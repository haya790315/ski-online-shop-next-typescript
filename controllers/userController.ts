import userSchema from "../model/userSchema";
import { NextApiRequest, NextApiResponse } from "next";

const newUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await userSchema.create(req.body);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).send(err)
    console.error(err);
  }
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

const userLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  //  Check if email and password exist
  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "password and email are required",
    });
  }
  //  Check if user exists && password is correct
  const user = await userSchema.findOne({ email });

  if (!user || !(await user.checkPassword(password, user.password))) {
    res.status(202).json({
      success: false,
      message: "メールアドレス、もしくはパスワードが間違っています。",
    });
  } else
    res.status(200).json({
      success: true,
      message: "ログイン",
      user,
    });
};

const checkUserEmailExisted = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const user = await userSchema.findOne({
      email: req.query.email,
    });
    if (user) {
      res.status(200).json({
        success: true,
        message: "メールアドレスは既に存在します",
      });
    } else {
      res.status(202).json({
        success: false,
        message: "メールアドレスは有効です",
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export { newUser, updateUser, userLogin, checkUserEmailExisted };
