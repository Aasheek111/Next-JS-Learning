import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
return NextResponse.json({

    // name:"churan"
    name:"hero",
    age:20
})
    
}