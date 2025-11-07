import { NextRequest, NextResponse } from "next/server";

interface ParamsType {
    params: {
        id: string  // Changed from number to string
    }
}

export async function GET(
    request: NextRequest,
    { params }: ParamsType
) {
    const { id } = await params

    return NextResponse.json({
        postId: id,
        message: `Hello from id ${id}`  // Fixed typo: "fromm" -> "from"
    })
}