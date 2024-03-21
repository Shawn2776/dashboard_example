import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/User";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    await connectMongoDB();
    const user = await User.findOne({ email: credentials.email });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.img = user.img;
        token.name = user.fname + " " + user.lname;
        token.userType = user.userType;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.img = token.img;
        session.user.name = token.name;
        session.user.userType = token.userType;
      }
      return session;
    },
  },
});