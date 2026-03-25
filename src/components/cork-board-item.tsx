"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { BoardItem } from "@/types/board-types";

interface CorkBoardItemProps {
  item: BoardItem;
  onClick: () => void;
}

export function CorkBoardItem({ item, onClick }: CorkBoardItemProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (item.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [item.images.length]);

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${item.title} details`}
      style={{ transform: `rotate(${item.rotation}deg)` }}
    >
      {/* Pin */}
      <div className="pin mb-1" />

      {/* Polaroid Card */}
      <div className="polaroid-card w-[120px] md:w-[150px]">
        {/* Image Container */}
        <div className="relative w-full aspect-square mb-2 bg-gray-200 overflow-hidden">
          {item.images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`${item.title} ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-700 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Caption */}
        <div className="text-center marker-font text-gray-700">
          {item.caption}
        </div>
      </div>
    </div>
  );
}
