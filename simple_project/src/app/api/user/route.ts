
import connectDB from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authOptions from "@/lib/auth";
import User from "@/model/user.model";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({
        message: "Unauthorized",
        status: 401,
      });
    }
    const user = await User.findById(session.user.id).select("-password");

    if (!user) {
      return NextResponse.json({
        message: "User not found",
        status: 404,
      });
    }
    return NextResponse.json(
      {
        message: "User found",
        user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      status: 500,
    });
  }
}
