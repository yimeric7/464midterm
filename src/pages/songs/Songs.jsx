import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Timestamp from '../../components/timestamp/Timestamp.jsx';

const ALL_SONGS = [
  { name: 'Heartless', link: 'https://open.spotify.com/embed/track/4EWCNWgDS8707fNSZ1oaA5?utm_source=generator' },
  { name: 'Good Morning', link: 'https://open.spotify.com/embed/track/6MXXY2eiWkpDCezVCc0cMH?utm_source=generator' },
  { name: 'Champion', link: 'https://open.spotify.com/embed/track/4UQMOPSUVJVicIQzjAcRRZ?utm_source=generator' },
  { name: 'Stronger', link: 'https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf?utm_source=generator' },
  { name: 'Flashing Lights', link: 'https://open.spotify.com/embed/track/5TRPicyLGbAF2LGBFbHGvO?utm_source=generator' },
  { name: 'Runaway', link: 'https://open.spotify.com/embed/track/3DK6m7It6Pw857FcQftMds?utm_source=generator' },
  { name: 'POWER', link: 'https://open.spotify.com/embed/track/2gZUPNdnz5Y45eiGxpHGSc?utm_source=generator' },
  { name: 'Jesus Walks', link: 'https://open.spotify.com/embed/track/5g1vtHqi9uV7xtYeCcFOBx?utm_source=generator' },
  { name: 'All Falls Down', link: 'https://open.spotify.com/embed/track/5SkRLpaGtvYPhw02vZhQQ9?utm_source=generator' },
  { name: 'Ni**as in Paris', link: 'https://open.spotify.com/embed/track/1auxYwYrFRqZP7t3s7w4um?utm_source=generator' },
];

function TrackEmbed({ srcUrl }) {
  return (
    <div style={{ backgroundColor: '#242424', marginTop: '20px' }}>
      <iframe
        style={{ width: '100%', height: '352px' }}
        allow="autoplay"
        src={srcUrl}
      ></iframe>
    </div>
  );
}

function Songs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState(ALL_SONGS);

  // Handle search term changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Update filtered songs based on search term
  useEffect(() => {
    const results = ALL_SONGS.filter(song => song.name.toLowerCase().includes(searchTerm));
    setFilteredSongs(results);
  }, [searchTerm]);  // Correct use of useEffect to react to changes in searchTerm

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>Goated Kanye Music</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search songs..."
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        {filteredSongs.map(song => (
          <TrackEmbed key={song.name} srcUrl={song.link} />
        ))}
      </div>
      <Timestamp />
    </div>
  );
}

export default Songs;
