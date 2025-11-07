import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    user: "aashik",
    age: 20,
  });
}
export async function POST(request: NextRequest) {
  const { name, college } = await request.json();
  return NextResponse.json({
    name,
    college
  });
}
