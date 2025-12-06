'use client';

import React, { useState, useEffect } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200); // Reset after 200ms
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div
        className={`w-6 h-6 rounded-full bg-[var(--accent)] opacity-50 blur-md transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          clicked ? 'scale-150 opacity-0' : 'scale-100 opacity-50'
        }`}
      />
    </div>
  );
}
