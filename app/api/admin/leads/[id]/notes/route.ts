import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Lead } from "@/lib/models/Lead";
import { isAuthenticatedRequest } from "@/lib/auth";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await connectDB();
  const { content } = await req.json();
  if (!content?.trim()) {
    return NextResponse.json({ error: "Content is required" }, { status: 400 });
  }

  const lead = await Lead.findByIdAndUpdate(
    params.id,
    { $push: { notes: { content, createdAt: new Date() } } },
    { new: true }
  ).lean();
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ lead });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await connectDB();
  const { noteId } = await req.json();

  const lead = await Lead.findByIdAndUpdate(
    params.id,
    { $pull: { notes: { _id: noteId } } },
    { new: true }
  ).lean();
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ lead });
}
