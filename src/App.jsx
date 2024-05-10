import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Quotes from './pages/quotes/Quotes';
import Songs from './pages/songs/Songs';
import Contact from './pages/contact/Contact';
import Game from './pages/game/Game';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
