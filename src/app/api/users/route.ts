import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  const newUser = await db.user.create({ data: { name } });
  return NextResponse.json(newUser);
}
