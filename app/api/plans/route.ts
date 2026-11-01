import { NextResponse } from "next/server";
import { plans } from "@/lib/mock-data";
import { isTursoConfigured } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    source: isTursoConfigured() ? "turso-ready-mock" : "mock",
    plans,
    total: plans.length,
  });
}
