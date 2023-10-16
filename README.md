# news-forum
 News Forum is a responsive web application built using React, Express.js, and SQLite, designed to provide real-time news feed, search capabilities, and a newsletter subscription service. This README provides an overview of the project's features and how to set it up.

# Features
-> Search Bar
The application features a search bar that allows users to search for news headlines and keywords. It helps users quickly find the information they're looking for.

-> News Entity
Each news entity in the feed includes the following features:
  -Headline: The main headline for the news article.
  -Content: A brief description of the news article's content.
  -Image: An accompanying image for the news article.
  -Video Playback: Optional video playback if provided by the news source.
  
-> Real-time News Feed
News Forum provides a real-time news feed that conveys a sense of freshness. The feed is updated periodically to ensure users have access to the latest news.

-> Filtering Options
Users can filter news by:
  -Geographic Location: Choose from a list of supported countries (e.g., United States, United Kingdom, etc.).
  -Topics: Select from various news categories such as Sports, Politics, Technology, Finance, and more.
  
-> Newsletter Subscription Service
News Forum offers a newsletter subscription service. Users can subscribe to the newsletter using their email address. Features include:
  -Subscription: Users can subscribe to the newsletter to receive news updates.
  -Unsubscription: Users can unsubscribe from the newsletter if they wish to stop receiving updates.
  -Email Storage: Email addresses are stored securely in the SQLite database

# Tech-stack
-React: The front-end of the application is built with React, providing a dynamic user interface.

-Express.js: The back-end server is developed using Express.js, handling API requests and database operations.

-SQLite: SQLite is used as the database for storing newsletter subscriptions.

-Axios: Axios is used for making API requests to fetch real-time news data.

-News API: The application uses the News API to fetch real-time news data.


# Getting Started
To run News Forum on your local machine, follow these steps:
i. Clone this repository to your local machine.

    git clone <repository-url>

ii. Install project dependencies for both the front-end and back-end:

    For the React front-end:
    
      cd news-forum
      
      npm install
      
    For the Express.js back-end:
    
      cd my-backend
      
      npm install
      
iii. Run the back-end server:

    cd my-backend
    
    node index.js
    
iv. Run the front-end:

    cd news-forum
    
    npm start
    
The application will be accessible at http://localhost:3000 in the web browser.
