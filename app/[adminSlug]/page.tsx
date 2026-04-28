import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

export default function AdminRootPage({ params }: { params: { adminSlug: string } }) {
  if (params.adminSlug !== process.env.ADMIN_PATH) notFound();
  redirect(`/${params.adminSlug}/overview`);
}
