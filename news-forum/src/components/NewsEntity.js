// src/components/NewsEntity.js

import React from 'react';

function NewsEntity({ headline, content, image, url }) {
  return (
    <div className="news-entity">
      {image && <img src={image} alt={headline} />}
      <h2>{headline}</h2>
      <p>{content}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="read-more-link">
        Read more
      </a>
    </div>
  );
}

export default NewsEntity;
