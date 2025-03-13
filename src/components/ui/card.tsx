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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click target is or is contained within an anchor tag
    const target = e.target as HTMLElement;
    const isLinkClick = target.tagName === 'A' || target.closest('a');
    
    // If it's a link click, don't expand the card
    if (isLinkClick) {
      if (onClick) onClick();
      return;
    }
    
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
    <div>
      <Card 
        className={`container-neumorphic-outset ${className} will-change-transform 
          ${isAnimating ? 'translate-y-1' : ''} transform 300ms ease-out`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
          }
        }}
        {...props}
      >
        <div style={{ transform: 'none' }}>
          {children}
        </div>
        
        {expandedContent && (
          <div 
            className={`overflow-hidden ${isExpanded ? 'mt-4 opacity-100' : 'opacity-0'}`}
            style={{
              maxHeight: isExpanded ? '24rem' : '0',
              transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out, margin 300ms ease-in-out'
            }}
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

