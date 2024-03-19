import User from "@/models/User";
import connectMongoDB from "./mongodb";
import Organization from "@/models/Organization";
import UserType from "@/models/UserType";
import Status from "@/models/Status";
import Industry from "@/models/Industry";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 4;

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
    return { count, users };
  } catch (error) {
    throw new Error("Failed to fetch users.", error);
  }
};

export const fetchUser = async (id) => {
  try {
    connectMongoDB();
    const user = await User.findById(id);
    console.log(user);

    return { user };
  } catch (error) {
    throw new Error("Failed to fetch user.", error);
  }
};

export const fetchOrganizations = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 4;

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

export const fetchOrg = async (id) => {
  try {
    connectMongoDB();
    const org = await Organization.findById(id);

    return org;
  } catch (error) {
    throw new Error("Failed to fetch organization.", error);
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

export const fetchStatuses = async () => {
  try {
    connectMongoDB();
    const statuses = await Status.find();
    return statuses;
  } catch (error) {
    throw new Error("Failed to fetch statuses.", error);
  }
};

export const fetchIndustries = async () => {
  try {
    connectMongoDB();
    const industries = await Industry.find();
    return industries;
  } catch (error) {
    throw new Error("Failed to fetch industries.", error);
  }
};
