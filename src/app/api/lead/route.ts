import { NextResponse } from "next/server";
import { clampLen } from "@/lib/validators";

export async function POST(req: Request) {
    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ error: "Bad request" }, { status: 400 });

    const payload = {
        name: clampLen(body.name, 80),
        email: clampLen(body.email, 120),
        phone: clampLen(body.phone, 30),
        service: clampLen(body.service, 30),
        location: clampLen(body.location, 80),
        preferredDate: clampLen(body.preferredDate ?? "", 40),
        details: clampLen(body.details, 1200),
        createdAt: new Date().toISOString(),
        ua: clampLen(req.headers.get("user-agent") ?? "", 160)
    };

    // TODO: tu napojíš reálne:
    // - email (Resend/Postmark)
    // - CRM (Supabase/Sheets)
    // - Telegram alert
    // For Ads stačí aj dočasne logovať.
    console.log("[LEAD]", payload);

    return NextResponse.json({ ok: true });
}
