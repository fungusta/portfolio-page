"use client"

import type React from "react"
import { useState } from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  )
}

interface OutdentCardProps extends CardProps {
  onClick?: () => void;
  expandedContent?: React.ReactNode;
}

export function OutdentCard({ className, children, onClick, expandedContent, ...props }: OutdentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!expandedContent) {
      if (onClick) onClick();
      return;
    }
    
    setIsAnimating(true);
    
    // First push down
    setTimeout(() => {
      setIsExpanded(!isExpanded);
      
      // Then bounce back up
      setTimeout(() => {
        setIsAnimating(false);
      }, 250); // Bounce back after 250ms
    }, 150); // Push down for 150ms
    
    if (onClick) onClick();
  };

  return (
    <div className="transition-all duration-300">
      <Card 
        className={`container-neumorphic-outset ${className} transition-all duration-300 ease-out
          ${isAnimating ? 'translate-y-1' : ''}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        {...props}
      >
        {children}
        
        {expandedContent && (
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
            aria-hidden={!isExpanded}
          >
            {expandedContent}
          </div>
        )}
      </Card>
    </div>
  )
}

export function IndentCard({ className, children, ...props }: CardProps) {
  return (
    <Card 
      className={`container-neumorphic-inset hover:container-neumorphic-outset ${className}`} 
      {...props}
    >
      {children}
    </Card>
  )
}

