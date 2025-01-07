import React, { useRef } from 'react';
import './Card.css';

const Card = () => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse position relative to container
    const y = e.clientY - rect.top;

    const rotateY = -2 / 25 * x + 20;
    const rotateX = 1 / 8 * y - 20;

    if (overlay) {
      overlay.style.backgroundPosition = `${x / 3}px ${y / 5}px`;
    }
    if (container) {
      container.style.transform = `perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (overlay) {
      overlay.style.backgroundPosition = '50% 50%'; // Reset the overlay position
    }
    if (container) {
      container.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)'; // Reset the rotation
    }
  };

  return (
    <div
      className="container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overlay" ref={overlayRef}></div>
      <div className="card"></div>
    </div>
  );
};

export default Card;
