import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter user name"],
    unique: true,
    maxLength: [10, "user name cannot exceed 10 characters"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [8, "password must longer than 8 number or characters"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter email"],
  },
  authorization: {
    type: String,
    enum: {
      values: ["admin", "vip", "user"],
      message: "user category must be defined",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  updateAt: Date,

  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre("save", function (next) {
  this.updateAt = Date.now();

  next();
});

export default mongoose.models.userSchema || mongoose.model("User", userSchema);
