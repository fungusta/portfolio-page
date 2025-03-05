'use client'

import React, { useState, useEffect } from 'react';

interface Trail {
  id: number;
  x: number;
  y: number;
}

const CursorTrail: React.FC = () => {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add a new trail element on every mouse move event
      setTrails((prev) => [...prev, { id: Date.now(), x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (trails.length === 0) return;
    // Remove the oldest trail element after a short delay to create a trailing effect
    const timer = setTimeout(() => {
      setTrails((prev) => prev.slice(1));
    }, 50); // Adjust this delay to change the trail length

    return () => clearTimeout(timer);
  }, [trails]);

  return (
    <>
      {/* Define the fadeOut keyframes to animate the opacity and scale */}
      <style>{`
        @keyframes fadeOut {
          0% {
            opacity: 0.05;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }
      `}</style>
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none rounded-full bg-primary"
          style={{
            width: '40px',  
            height: '40px',
            left: trail.x - 20, 
            top: trail.y - 20,   
            animation: 'fadeOut 0.5s forwards',
            zIndex: 1000,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
