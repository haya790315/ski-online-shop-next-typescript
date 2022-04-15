import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { formatTime } from "lib/util/util";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter user name"],
    maxLength: [16, "user name cannot exceed 10 characters"],
    immutable: (doc: { authorization: string }) =>
      doc.authorization === "ADMIN"
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [6, "password must longer than 6 number or characters"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter email"],
  },
  authorization: {
    type: String,
    enum: ["ADMIN", "VIP", "USER"],
    default: "USER",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  formatCreatedAt: {
    type: String,
  },
  updateAt: Date,
  formatUpdatedAt: {
    type: String,
  },

  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre("save", function (next) {
  if (!this.isNew) return next();
  this.formatCreatedAt = formatTime();
  this.password = bcrypt.hashSync(this.password, 12);
  next();
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isNew) {
    this.updateAt = new Date();
    this.formatUpdatedAt = formatTime();
    next();
  } else next();
});

userSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate() as Record<string, unknown>;
  const password = update.password || undefined;

  if (typeof password === "string" && password) {
    update.password = bcrypt.hashSync(password, 12);
    update.updateAt = new Date();
    update.formatUpdatedAt = formatTime();

    next();
  } else {
    next();
  }
});

userSchema.methods.checkPassword = async function (
  userPassword: string,
  hash: string
) {
  return bcrypt.compareSync(userPassword, hash);
};

export default mongoose.models.Users || mongoose.model("Users", userSchema);
