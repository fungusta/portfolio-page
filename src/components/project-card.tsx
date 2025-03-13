"use client";

import Image from "next/image"
import { OutdentCard } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { MediaOverlay } from "@/components/media-overlay"

// Custom hook to detect if the device is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Consider devices with width less than 768px as mobile
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  return isMobile;
};

interface ProjectCardProps {
  title: string
  description: string
  logo: string
  link?: string
  videoUrl?: string
  imageUrl?: string
  techStack?: { name: string; icon: string; link?: string }[]
}

export function ProjectCard({ 
  title, 
  description, 
  logo, 
  link, 
  videoUrl, 
  imageUrl,
  techStack = [] 
}: ProjectCardProps) {
  const [showMedia, setShowMedia] = useState(false);
  const isMobile = useIsMobile();
  
  // Determine media type and URL
  const mediaUrl = videoUrl || imageUrl;
  const mediaType = videoUrl ? "video" : "image";

  const handleMouseEnter = () => {
    if (mediaUrl && !isMobile) {
      setShowMedia(true);
    }
  };

  const handleMouseLeave = () => {
    setShowMedia(false);
  };

  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if (link && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const TechStackIcons = () => (
    <div className="flex gap-1 sm:gap-2 flex-wrap justify-end">
      {techStack.map((tech) => (
        <button 
          key={tech.name} 
          onClick={(e) => {
            e.stopPropagation();
            if (tech.link) window.open(tech.link, "_blank", "noopener,noreferrer");
          }}
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 relative rounded-xl transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80" 
          title={tech.name}
          aria-label={tech.name}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              if (tech.link) window.open(tech.link, "_blank", "noopener,noreferrer");
            }
          }}
        >
          <div className="absolute inset-0.5 sm:inset-1 md:inset-1.5">
            <Image 
              src={tech.icon}
              alt={tech.name}
              fill
              className="object-contain"
            />
          </div>
        </button>
      ))}
    </div>
  );

  const CardContent = () => (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 relative shrink-0 transition-transform duration-300 ease-in-out hover:scale-110">
        <Image src={logo || "/placeholder.svg"} alt={`${title} logo`} fill className="object-contain rounded-xl" />
      </div>
      <div className="flex-1">
        <h3 className="text-base sm:text-lg md:text-xl text-secondary">{title}</h3>
        <p className="text-xs sm:text-sm md:text-base text-primary/80">{description}</p>
      </div>
      <TechStackIcons />
    </div>
  );

  return (
    <>
      <div 
        className={`transition-transform duration-300 ease-in-out hover:scale-[1.02] ${link ? 'cursor-pointer group relative' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
        role={link ? "link" : "presentation"}
        aria-label={link ? `Visit ${title} website (opens in a new tab)` : undefined}
        tabIndex={link ? 0 : undefined}
      >
        <OutdentCard className="p-4 sm:p-6">
          <CardContent />
          {link && (
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 text-primary/60 group-hover:text-primary/80 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="sr-only">External link</span>
            </div>
          )}
        </OutdentCard>
      </div>
      {mediaUrl && !isMobile && <MediaOverlay mediaUrl={mediaUrl} mediaType={mediaType} isVisible={showMedia} />}
    </>
  );
}

