import React from 'react';
import ContentCard from './ContentCard';
import './ContentGrid.css';

function ContentGrid({ contents, loading }) {
  if (loading) {
    return <div className="loading">Loading content...</div>;
  }

  return (
    <div className="content-grid">
      {contents.map(content => (
        <ContentCard key={content.id} content={content} />
      ))}
    </div>
  );
}

export default ContentGrid;
