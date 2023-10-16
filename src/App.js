import React, { useState, useEffect } from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';
import SearchBar from './components/SearchBar';
import NewsletterSubscription from './components/NewsLetterSubscription'; // Adjust the path as needed
import Footer from './components/Footer'; // Import the Footer component

import { fetchNews } from './components/NewsService';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Initialize with an empty string
  const [selectedCountry, setSelectedCountry] = useState('us'); // Initialize with the default country

  // Fetch news data when the component mounts
  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNews(selectedCountry, selectedCategory);
        setNewsData(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    getNews();
  }, [selectedCountry, selectedCategory]); // Fetch news data whenever country or category changes

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

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle country change
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <h1>News Forum</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        setSearchTerm={setSearchTerm}
        onCategoryChange={handleCategoryChange}
        onCountryChange={handleCountryChange}
        selectedCategory={selectedCategory}
        selectedCountry={selectedCountry}
      />
     
      <NewsFeed newsData={filteredNews.length > 0 ? filteredNews : newsData} />
      <Footer />
    </div>
  );
}

export default App;
