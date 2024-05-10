import Navbar from '../../components/navbar/Navbar.jsx';
import React, { useState, useEffect } from 'react';
import KanyeQuotePic from '../../assets/kanye_west-removebg-preview.png';
import Timestamp from '../../components/timestamp/Timestamp.jsx';
import './Quotes.css';

function censorCussWordsDynamically(text) {
  const cussWords = ['fuck', 'shit', 'damn', 'sex', 'porn', 'kill']; 
  const escapedCussWords = cussWords.map(word => word.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));
  const regex = new RegExp(escapedCussWords.join("|"), 'gi');
  return text.replace(regex, match => '*'.repeat(match.length));
}

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
      setQuote(censorCussWordsDynamically(data.quote));
    } catch (error) {
      console.error('Failed to fetch the quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleShareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote + '" - Kanye West')}&hashtags=KanyeWest`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div style={{marginTop: '12%'}}>
      <Navbar />
      <h1>Kanye West Quote</h1>
      <p>"{quote}"</p>
      <div>
        <button onClick={fetchQuote}>Get New Quote</button>
      </div>
      <br/>
      <button onClick={handleShareToTwitter}>Share to Twitter</button>
      <img src={KanyeQuotePic} width="100%" />
      <footer className="footer">
        <p>Page created for educational purposes.</p>
      </footer>
      <Timestamp />
    </div>
  );
}

export default Quotes;
