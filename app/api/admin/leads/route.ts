import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Lead } from "@/lib/models/Lead";
import { isAuthenticatedRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  if (!isAuthenticatedRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "";
  const tag = searchParams.get("tag") || "";

  const query: Record<string, unknown> = {};
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { phone: { $regex: search, $options: "i" } },
    ];
  }
  if (status) query.status = status;
  if (tag) query.tags = tag;

  const leads = await Lead.find(query).sort({ createdAt: -1 }).lean();
  return NextResponse.json({ leads });
}

export async function POST(req: NextRequest) {
  if (!isAuthenticatedRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const body = await req.json();

  if (!body.name || !body.email || !body.phone) {
    return NextResponse.json({ error: "Name, email and phone are required" }, { status: 400 });
  }

  const lead = await Lead.create(body);
  return NextResponse.json({ lead }, { status: 201 });
}
