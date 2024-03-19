import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      length: 10,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 26,
    },
    organization: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    addrLine1: {
      type: String,
      required: true,
    },
    addrLine2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
      length: 5,
    },
    img: {
      type: String,
      default: "/noavatar2.png",
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
