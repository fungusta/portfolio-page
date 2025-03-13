"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ProfileImageCarouselProps {
  images: string[]
  interval: number
  alt: string
}

export function ProfileImageCarousel({ images, interval, alt }: ProfileImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Skip the effect if there's only one image
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval])

  return (
    <>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}
    </>
  )
} 