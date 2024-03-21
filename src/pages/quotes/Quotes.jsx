import Navbar from '../../components/navbar/Navbar.jsx';
import React, { useState, useEffect } from 'react';
import KanyeQuotePic from '../../assets/kanye_west-removebg-preview.png';
import './Quotes.css';

function Quotes() {
  const [quote, setQuote] = useState('');

  // Function to fetch a quote from the API
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.kanye.rest/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Failed to fetch the quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Kanye West Quote</h1>
      <p>"{quote}"</p>
      <div>
        <button onClick={fetchQuote}>Get New Quote</button>
      </div>
      <img src={KanyeQuotePic} width="100%" />
      <footer className="footer">
        <p>Page created for educational purposes.</p>
      </footer>
    </div>
  );
}

export default Quotes;
