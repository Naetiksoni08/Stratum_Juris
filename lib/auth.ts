import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const JWT_SECRET = process.env.JWT_SECRET!;

export function signToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}

/** Call at the top of any protected server page. Redirects to login if not authed. */
export async function requireAdminAuth() {
  const adminPath = process.env.ADMIN_PATH!;
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) redirect(`/${adminPath}/login?unauthorized=1`);
  try {
    verifyToken(token);
  } catch {
    redirect(`/${adminPath}/login?unauthorized=1`);
  }
}

/** Use inside API route handlers to gate access. */
export function isAuthenticatedRequest(req: Request): boolean {
  const cookieHeader = req.headers.get("cookie") ?? "";
  const match = cookieHeader.match(/admin_token=([^;]+)/);
  const token = match?.[1];
  if (!token) return false;
  try {
    verifyToken(token);
    return true;
  } catch {
    return false;
  }
}
