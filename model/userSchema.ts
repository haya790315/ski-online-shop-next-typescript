import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { formatInTimeZone } from "date-fns-tz";

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
  this.formatCreatedAt = formatInTimeZone(
    new Date(),
    "Asia/Tokyo",
    "yyyy-MM-dd HH:mm:ss zzz"
  );
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isNew) {
    this.updateAt = new Date();
    this.formatUpdatedAt = formatInTimeZone(
      new Date(),
      "Asia/Tokyo",
      "yyyy-MM-dd HH:mm:ss zzz"
    );
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
    update.formatUpdatedAt = formatInTimeZone(
      new Date(),
      "Asia/Tokyo",
      "yyyy-MM-dd HH:mm:ss zzz"
    );

    next();
  } else {
    next();
  }
});

export default mongoose.models.Users || mongoose.model("Users", userSchema);
