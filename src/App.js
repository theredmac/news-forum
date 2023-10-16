import React, { useState, useEffect } from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';
import SearchBar from './components/SearchBar';
import { fetchNews } from './components/NewsService';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  // Fetch news data when the component mounts
  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNews();
        console.log('newsData:', newsData);
        setNewsData(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    getNews();
  }, []);

  // Function to handle the search
  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // If the search term is empty, show all news
      setFilteredNews([]);
    } else {
      // Filter news based on the search term
      const filteredNews = newsData.filter((news) =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (news.description && news.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredNews(filteredNews);
    }
  };

  return (
    <div className="App">
      <h1>News Forum</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        setSearchTerm={setSearchTerm}
      />
      <NewsFeed newsData={filteredNews.length > 0 ? filteredNews : newsData} />
    </div>
  );
}

export default App;
