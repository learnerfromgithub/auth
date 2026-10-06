import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    console.log("LOGIN API BODY:", body);

    return NextResponse.json({
      success: true,
      message: "Login API is working",
      data: body,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "API error",
      },
      { status: 500 }
    );
  }
}