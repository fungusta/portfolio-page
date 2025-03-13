"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface MediaOverlayProps {
  mediaUrl: string;
  isVisible: boolean;
  mediaType?: "video" | "image";
}

export function MediaOverlay({ mediaUrl, isVisible, mediaType = "video" }: MediaOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mediaDimensions, setMediaDimensions] = useState({ width: 0, height: 0 });
  const [maxDimensions, setMaxDimensions] = useState({ width: 1024, height: 768 });

  // Set max dimensions based on window size
  useEffect(() => {
    const updateMaxDimensions = () => {
      setMaxDimensions({
        width: Math.min(window.innerWidth * 0.9, 1024),
        height: window.innerHeight * 0.8
      });
    };

    // Set initial dimensions
    updateMaxDimensions();

    // Update dimensions on resize
    window.addEventListener('resize', updateMaxDimensions);
    return () => window.removeEventListener('resize', updateMaxDimensions);
  }, []);

  // Handle visibility changes for video
  useEffect(() => {
    if (mediaType !== "video" || !videoRef.current) return;
    
    if (isVisible) {
      // Only start playing if the video is visible
      const playPromise = videoRef.current.play();
      
      // Handle the play promise to avoid uncaught promise errors
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error("Error playing video:", error);
            setIsPlaying(false);
          });
      }
    } else {
      // Pause and reset when not visible
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  }, [isVisible, isPlaying, mediaType]);

  // Preload the video when component mounts
  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (mediaType === "video" && videoRef.current && isPlaying) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [isPlaying, mediaType]);

  const handleVideoLoaded = () => {
    setLoaded(true);
    if (videoRef.current) {
      setMediaDimensions({
        width: videoRef.current.videoWidth,
        height: videoRef.current.videoHeight
      });
    }
  };

  const handleImageLoaded = () => {
    setLoaded(true);
    // For Next.js Image, we need to use a different approach to get dimensions
    // We'll use a hidden img element to get the natural dimensions
    const img = new window.Image();
    img.onload = () => {
      setMediaDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    img.src = mediaUrl;
  };

  // Don't render anything if no media URL is provided
  if (!mediaUrl) return null;

  // Calculate container dimensions while maintaining aspect ratio
  let containerWidth = mediaDimensions.width;
  let containerHeight = mediaDimensions.height;
  
  if (containerWidth > maxDimensions.width) {
    const ratio = maxDimensions.width / containerWidth;
    containerWidth = maxDimensions.width;
    containerHeight = containerHeight * ratio;
  }
  
  if (containerHeight > maxDimensions.height) {
    const ratio = maxDimensions.height / containerHeight;
    containerHeight = maxDimensions.height;
    containerWidth = containerWidth * ratio;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-300 pointer-events-none ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <div 
        className="container-neumorphic-outset relative rounded-xl overflow-hidden pointer-events-none bg-background p-4"
        style={{
          width: loaded && containerWidth > 0 ? `${containerWidth}px` : 'auto',
          height: loaded && containerHeight > 0 ? `${containerHeight}px` : 'auto',
          maxWidth: '90vw',
          maxHeight: '80vh',
          minWidth: loaded ? 'auto' : '300px',
          minHeight: loaded ? 'auto' : '200px',
        }}
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          {/* Render video or image based on mediaType */}
          {(isVisible || loaded) && mediaType === "video" && (
            <video
              ref={videoRef}
              src={mediaUrl}
              className={`w-full h-full object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
              playsInline
              muted
              loop
              preload="metadata"
              onLoadedData={handleVideoLoaded}
            />
          )}
          {(isVisible || loaded) && mediaType === "image" && (
            <div className="relative w-full h-full">
              <Image
                src={mediaUrl}
                alt="Media content"
                fill
                className={`object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                onLoad={handleImageLoaded}
              />
            </div>
          )}
          {/* Loading spinner */}
          {isVisible && !loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 pointer-events-none">
              <div className="w-12 h-12 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 