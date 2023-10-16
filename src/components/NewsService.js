// NewsService.js

import axios from 'axios';

const API_KEY = '4866663f0fd140e48cf56b86daf0bd98'; // Replace with your News API key
const API_URL = 'https://newsapi.org/v2/top-headlines';

const fetchNews = async (country = 'us', category = '') => {
  try {
    const params = {
      apiKey: API_KEY,
      country: country,
    };

    if (category) {
      params.category = category;
    }

    const response = await axios.get(API_URL, {
      params: params,
    });

    return response.data.articles;
  } catch (error) {
    throw error;
  }
};

export { fetchNews };
