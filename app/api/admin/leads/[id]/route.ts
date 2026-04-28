import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Lead } from "@/lib/models/Lead";
import { DeletedLead } from "@/lib/models/DeletedLead";
import { isAuthenticatedRequest } from "@/lib/auth";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await connectDB();
  const lead = await Lead.findById(params.id).lean();
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ lead });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await connectDB();
  const body = await req.json();
  const lead = await Lead.findByIdAndUpdate(params.id, { $set: body }, { new: true }).lean();
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ lead });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await connectDB();
  const lead = await Lead.findById(params.id).lean();
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await DeletedLead.create({
    ...lead,
    _id: undefined,
    deletedAt: new Date(),
    originalCreatedAt: (lead as any).createdAt,
  });

  await Lead.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
