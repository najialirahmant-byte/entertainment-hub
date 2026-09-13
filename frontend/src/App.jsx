import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContentGrid from './components/ContentGrid';

function App() {
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setContents([
        {
          id: 1,
          title: 'Stranger Things',
          type: 'show',
          posterUrl: 'https://via.placeholder.com/300x450/e50914/ffffff?text=Stranger+Things',
          genre: ['Sci-Fi', 'Drama'],
          rating: 8.7
        },
        {
          id: 2,
          title: 'The Crown',
          type: 'show',
          posterUrl: 'https://via.placeholder.com/300x450/e50914/ffffff?text=The+Crown',
          genre: ['Drama', 'History'],
          rating: 8.6
        },
        {
          id: 3,
          title: 'Inception',
          type: 'movie',
          posterUrl: 'https://via.placeholder.com/300x450/e50914/ffffff?text=Inception',
          genre: ['Sci-Fi', 'Thriller'],
          rating: 8.8
        },
        {
          id: 4,
          title: 'The Matrix',
          type: 'movie',
          posterUrl: 'https://via.placeholder.com/300x450/e50914/ffffff?text=The+Matrix',
          genre: ['Sci-Fi', 'Action'],
          rating: 8.7
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <main>
        <div className="container">
          <h2 className="section-title">Trending Now</h2>
          <ContentGrid contents={contents} loading={loading} />
        </div>
      </main>
    </div>
  );
}

export default App;
