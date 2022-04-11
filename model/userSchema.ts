import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { formatTime } from "lib/util/util";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter user name"],
    unique: true,
    maxLength: [10, "user name cannot exceed 10 characters"],
    immutable: (doc: { authorization: string }) =>
      doc.authorization === "ADMIN",
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
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
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
    const salt = bcrypt.genSaltSync(10);
    update.password = bcrypt.hashSync(password, salt);
    update.updateAt = new Date();
    update.formatUpdatedAt = formatTime();

    next();
  } else {
    next();
  }
});

export default mongoose.models.Users || mongoose.model("Users", userSchema);
