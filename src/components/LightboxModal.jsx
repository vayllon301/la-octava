import React from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, image, title }) {
  if (!isOpen || !image) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close image lightbox"
        >
          <X size={24} />
        </button>
        <img src={image} alt={title || 'La Octava Space'} className="lightbox-full-img" />
        {title && <div className="lightbox-caption font-serif">{title}</div>}
      </div>
    </div>
  );
}
