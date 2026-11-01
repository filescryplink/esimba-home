import { NextResponse } from "next/server";
import { plans } from "@/lib/mock-data";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const planId = typeof body?.planId === "string" ? body.planId : "";
  const plan = plans.find((item) => item.id === planId);

  if (!/^\S+@\S+\.\S+$/.test(email) || !plan) {
    return NextResponse.json({ ok: false, message: "Please provide a valid email and plan." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    mock: true,
    requestId: `DEMO-${Date.now().toString(36).toUpperCase()}`,
    message: `Your mock request for ${plan.name} is ready for the Turso integration step.`,
  });
}
