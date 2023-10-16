// NewsService.js

import axios from 'axios';

const API_KEY = '4866663f0fd140e48cf56b86daf0bd98'; // Replace with your News API key
const API_URL = 'https://newsapi.org/v2/top-headlines';

const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_URL}?country=us&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    throw error;
  }
};

export { fetchNews };
