import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  const users = await db.user.findMany({
    where: { name: { not: "sally" } },
    orderBy: { id: "desc" },
  });
  return NextResponse.json(users);
}
