import React from 'react';
import NewsEntity from './NewsEntity';

function NewsFeed({ newsData }) {
  return (
    <div className="news-feed">
      <h2>Real-time News Feed</h2>
      {newsData.map((article, index) => (
        <NewsEntity
          key={index}
          headline={article.title}
          content={article.description}
          image={article.urlToImage}
          url={article.url}
        />
      ))}
    </div>
  );
}

export default NewsFeed;
