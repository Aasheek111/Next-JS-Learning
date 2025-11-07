import connectDB from "@/lib/db";

import User from "@/model/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("Mongo URI:", process.env.MONGO_URI);

  try {
    const { name, email, password } = await req.json();
    await connectDB();

    const existUser = await User.findOne({ email });

    if (existUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          message: "Password must be at least 6 characters",
        },
        {
          status: 400,
        }
      );
    }

    const hashedpass = await bcrypt.hash(password, 10);

    const user = await User.create({
      password: hashedpass,
      email,
      username: name,
    });
    return NextResponse.json(
      {
        user,
      },
      {
        status: 201,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: `Something went wrong with server ${e}`,
      },
      {
        status: 500,
      }
    );
  }
}
