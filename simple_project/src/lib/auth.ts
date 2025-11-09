import connectDB from "@/lib/db";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new Error("Invalid credentials");
        }
        await connectDB();

        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User not found");
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          throw new Error("Invalid Password");
        }
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image as string;
      }

      return session;
    },

    async signIn({ account, user }) {
      if (account?.provider === "google") {
        await connectDB();
        const existUser = await User.findOne({ email: user?.email });
        if (account?.provider === "google") {
          await connectDB();

          let existUser = await User.findOne({ email: user?.email });

          if (!existUser) {
            existUser = await User.create({
              name: user?.name,
              email: user?.email,
              image: user?.image,
            });
          }

          user.id = existUser._id.toString();
        }
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
    error: "/login",
    newUser: "/register",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
export default authOptions;
