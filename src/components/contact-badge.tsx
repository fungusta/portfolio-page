"use client";

import type { ContactBadge as ContactBadgeType } from "@/types/board-types";

interface ContactBadgeProps {
  badge: ContactBadgeType;
}

export function ContactBadge({ badge }: ContactBadgeProps) {
  return (
    <a
      href={badge.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col items-center group"
      style={{ transform: `rotate(${badge.rotation}deg)` }}
      aria-label={badge.label}
    >
      {/* Pin */}
      <div className="pin mb-1" />

      {/* Mini Polaroid Card */}
      <div className="polaroid-card w-[80px] flex flex-col items-center justify-center p-2 transition-all duration-300 group-hover:shadow-lg">
        <div className="text-primary mb-1">
          {badge.icon}
        </div>
        <span className="text-[10px] text-center text-primary/80 font-medium">
          {badge.label}
        </span>
      </div>
    </a>
  );
}
