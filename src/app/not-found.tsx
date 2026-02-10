import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function NotFound() {
    return (
        <div className="vh100" style={{ textAlign: "center", padding: 20 }}>
            <h1 className="h1" style={{ fontSize: "6rem", color: "var(--primary)", lineHeight: 1 }}>404</h1>
            <h2 className="h2">Stránka sa nenašla</h2>
            <p className="lead" style={{ maxWidth: 400, margin: "20px auto" }}>
                Možno ste hľadali niečo iné, alebo sme to už upratali/presťahovali :)
            </p>
            <div className="flexCenter" style={{ gap: 16, flexWrap: "wrap" }}>
                <Link href="/" className="btn btnPrimary">
                    Späť na úvod
                </Link>
                <Link href={ROUTES.lead} className="btn">
                    Nezáväzný dopyt
                </Link>
            </div>
        </div>
    );
}
