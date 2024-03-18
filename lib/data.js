import User from "@/models/User";
import connectMongoDB from "./mongodb";
import Organization from "@/models/Organization";
import UserType from "@/models/UserType";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectMongoDB();
    const count = await User.find({
      $or: [{ fname: regex }, { lname: regex }],
    }).count();
    const users = await User.find({
      $or: [{ fname: regex }, { lname: regex }],
    })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE);
    console.log(users);
    return { count, users };
  } catch (error) {
    throw new Error("Failed to fetch users.", error);
  }
};

export const fetchOrganizations = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectMongoDB();
    const count = await Organization.find({ name: { $regex: regex } }).count();
    const orgs = await Organization.find({ name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE);
    return { count, orgs };
  } catch (error) {
    throw new Error("Failed to fetch organizations.", error);
  }
};

export const fetchOrgs = async () => {
  try {
    connectMongoDB();
    const orgs = await Organization.find();
    return orgs;
  } catch (error) {
    throw new Error("Failed to fetch organizations.", error);
  }
};

export const fetchUserTypes = async () => {
  try {
    connectMongoDB();
    const types = await UserType.find();
    return types;
  } catch (error) {
    throw new Error("Failed to fetch types.", error);
  }
};
