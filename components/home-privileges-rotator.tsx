"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "İşletmenize Özel Çözümler",
  "Soğuk Zincir ile Güvenli Teslimat.",
  "%100 Doğal ve Katkısız Ürünler",
] as const;

const SLIDE_MS = 3200;
/** px; matches Tailwind h-16 */
const SLIDE_PX = 64;

export function HomePrivilegesRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="relative mx-auto mt-8 h-16 w-full max-w-2xl overflow-hidden"
      aria-live="polite"
      aria-label="Baltacı Gıda ayrıcalıkları"
    >
      <div
        className="flex flex-col transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${index * SLIDE_PX}px)`,
        }}
      >
        {MESSAGES.map((text) => (
          <div
            key={text}
            className="flex h-16 shrink-0 items-center justify-center px-4 text-center text-lg text-muted-foreground sm:text-xl"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
