require("dotenv").config();

// export const API_NEWS_HEADLINE = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
export const API_NEWS_HEADLINE = (size) => `https://newsapi.org/v2/top-headlines?country=us&size=${size}&apiKey=d158b1223ae84d81970e7af82ea6a080`;
export const API_NEWS_CATEGORY = (category, size) => `https://newsapi.org/v2/top-headlines?country=us&size=$${size}&category=${category}&apiKey=d158b1223ae84d81970e7af82ea6a080`;