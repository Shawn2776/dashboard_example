import mongoose, { Schema } from "mongoose";

const OrgSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    domain: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 26,
    },
    phone: {
      type: String,
      required: true,
      length: 10,
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
    status: {
      type: String,
      default: "active",
      required: true,
    },
    industy: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "/nic_edu.png",
    },
  },
  {
    collection: "organizations",
    timestamps: true,
  }
);

const Organization =
  mongoose.models.Organization || mongoose.model("Organization", OrgSchema);

export default Organization;
