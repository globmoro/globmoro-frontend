"use client";

import Image from "next/image";
import { useState } from "react";
import type { MachinePhoto } from "@/data/machines";

export function MachineGallery({ photos }: { photos: MachinePhoto[] }) {
  const [active, setActive] = useState(0);
  const current = photos[active] ?? photos[0];

  if (!current) return null;

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
          priority
        />
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(index)}
            className={`relative h-16 w-20 shrink-0 overflow-hidden border ${
              index === active
                ? "border-accent"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
            aria-label={photo.alt}
          >
            <Image
              src={photo.src}
              alt=""
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
