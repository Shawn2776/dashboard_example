"use server";

import User from "@/models/User";
import connectMongoDB from "./mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import Organization from "@/models/Organization";
import { signIn } from "@/app/auth";

export const addUser = async (formData) => {
  const {
    fname,
    lname,
    organization,
    userType,
    phone,
    email,
    addrLine1,
    addrLine2,
    city,
    state,
    zip,
    status,
    password,
  } = Object.fromEntries(formData);

  try {
    await connectMongoDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password", salt);

    const newUser = new User({
      fname,
      lname,
      organization,
      userType,
      phone,
      email,
      addrLine1,
      addrLine2,
      city,
      state,
      zip,
      status,
      password: hashedPassword,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const {
    _id,
    fname,
    lname,
    userType,
    phone,
    email,
    addrLine1,
    addrLine2,
    city,
    state,
    zip,
    status,
    password,
  } = Object.fromEntries(formData);

  try {
    await connectMongoDB();

    const updateFields = {
      fname,
      lname,
      userType,
      phone,
      email,
      addrLine1,
      addrLine2,
      city,
      state,
      zip,
      status,
      password,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(_id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectMongoDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }

  revalidatePath("/dashboard/users");
};

export const addOrganization = async (formData) => {
  const {
    name,
    domain,
    email,
    password,
    phone,
    addrLine1,
    addrLine2,
    city,
    state,
    zip,
    status,
    industry,
  } = Object.fromEntries(formData);

  try {
    await connectMongoDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password", salt);

    const newOrganization = new Organization({
      name,
      domain,
      email,
      phone,
      addrLine1,
      addrLine2,
      city,
      state,
      zip,
      status,
      industry,
      password: hashedPassword,
    });

    await newOrganization.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user");
  }

  revalidatePath("/dashboard/organizations");
  redirect("/dashboard/organizations");
};

export const updateOrganization = async (formData) => {
  const {
    _id,
    name,
    domain,
    addrLine1,
    addrLine2,
    city,
    state,
    zip,
    phone,
    email,
    password,
    image,
    status,
    industry,
  } = Object.fromEntries(formData);

  try {
    await connectMongoDB();

    const updateFields = {
      name,
      domain,
      addrLine1,
      addrLine2,
      city,
      state,
      zip,
      phone,
      email,
      password,
      image,
      status,
      industry,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Organization.findByIdAndUpdate(_id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update organization");
  }

  revalidatePath("/dashboard/organizations");
  redirect("/dashboard/organizations");
};

export const deleteOrganization = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectMongoDB();
    await Organization.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete organization.");
  }

  revalidatePath("/dashboard/organizations");
};

export const authenticate = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    return "Failed to Login";
  }
};
// export const authenticate = async (formData) => {
//   const { email, password } = Object.fromEntries(formData);

//   try {
//     await signIn("credentials", { email, password });
//   } catch (error) {
//     return { error: "Failed to Login" };
//   }
// };