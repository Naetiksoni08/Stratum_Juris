import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const admins = [
    { email: process.env.ADMIN_EMAIL!, hash: process.env.ADMIN_PASSWORD_HASH! },
    { email: process.env.ADMIN_EMAIL_2!, hash: process.env.ADMIN_PASSWORD_HASH_2! },
  ].filter((a) => a.email && a.hash);

  const admin = admins.find((a) => a.email === email);
  if (!admin) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, admin.hash);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ email });
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
  });
  return res;
}
