import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { DeletedLead } from "@/lib/models/DeletedLead";
import { isAuthenticatedRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  if (!isAuthenticatedRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await connectDB();
  const leads = await DeletedLead.find().sort({ deletedAt: -1 }).lean();
  return NextResponse.json({ leads });
}
