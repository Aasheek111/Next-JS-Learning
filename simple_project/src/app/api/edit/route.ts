import connectDB from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import uploadCloudinary from "@/lib/cloudinary";
import User from "@/model/user.model";
import authOptions from "../auth/[...nextauth]/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const name = formData.get("name") as string;
    const file = formData.get("file") as Blob;

    let imageUrl = session.user.image ?? null;

    if (file) {
      imageUrl = await uploadCloudinary(file);
    }

    const user = await User.findOneAndUpdate(
      {_id:session.user.id},
      {
        name,
        image: imageUrl,
      },
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "User updated successfully", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
