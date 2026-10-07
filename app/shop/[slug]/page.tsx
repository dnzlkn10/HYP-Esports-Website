"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function JerseyShowcase() {
  const [side, setSide] = useState<"front" | "back">("front");
  const isFront = side === "front";

  return (
    <main className="jersey-showcase">
      <div className="jersey-showcase-top">
        <Link href="/shop" className="jersey-back-link">← JERSEY</Link>
        <div className="jersey-side-label">{isFront ? "ÖN" : "ARKA"}</div>
      </div>

      <div className="jersey-stage">
        <Image
          key={side}
          src={isFront ? "/jersey front.png" : "/jersey back.png"}
          alt={isFront ? "HYP Esports forma ön yüz" : "HYP Esports forma arka yüz"}
          fill
          priority
          sizes="100vw"
          className="jersey-showcase-image"
        />

        {!isFront && (
          <button className="jersey-arrow jersey-arrow-left" onClick={() => setSide("front")} aria-label="Ön yüzü göster">←</button>
        )}
        {isFront && (
          <button className="jersey-arrow jersey-arrow-right" onClick={() => setSide("back")} aria-label="Arka yüzü göster">→</button>
        )}
      </div>

      <div className="jersey-showcase-footer">
        <span>HYP ESPORTS</span>
        <strong>OFFICIAL JERSEY</strong>
        <span>{isFront ? "01 / 02" : "02 / 02"}</span>
      </div>
    </main>
  );
}
