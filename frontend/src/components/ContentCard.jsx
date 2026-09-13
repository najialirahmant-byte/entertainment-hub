import React, { useState } from 'react';
import { FiPlay, FiHeart } from 'react-icons/fi';
import './ContentCard.css';

function ContentCard({ content }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="content-card">
      <div className="card-image">
        <img src={content.posterUrl} alt={content.title} />
        <div className="card-overlay">
          <button className="play-btn">
            <FiPlay /> Play
          </button>
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <FiHeart />
          </button>
        </div>
      </div>
      <div className="card-info">
        <h3>{content.title}</h3>
        <div className="card-meta">
          <span className="rating">⭐ {content.rating}</span>
          <span className="type">{content.type}</span>
        </div>
        <div className="genres">
          {content.genre.map((g, idx) => (
            <span key={idx} className="genre-tag">{g}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
