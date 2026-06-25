import { NextRequest, NextResponse } from "next/server";

/**
 * Lead capture is disabled on heritagestonebridge.com.
 * Use RealScout (property search) or Calendly (appointments) — both sync to Follow Up Boss natively.
 */
export async function POST(_request: NextRequest) {
  return NextResponse.json(
    {
      error:
        "Lead capture form is disabled on this site. Use RealScout property search or Calendly to connect with Dr. Jan Duffy.",
    },
    { status: 410 },
  );
}
