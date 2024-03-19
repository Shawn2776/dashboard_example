import User from "@/models/User";
import connectMongoDB from "./mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import Organization from "@/models/Organization";

export const addUser = async (formData) => {
  "use server";

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

export const addOrganization = async (formData) => {
  "use server";

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
