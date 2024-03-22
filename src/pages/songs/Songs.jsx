import Navbar from '../../components/navbar/Navbar.jsx';
import React, { useState } from 'react';

const ALL_SONGS = [
  'https://open.spotify.com/embed/track/4EWCNWgDS8707fNSZ1oaA5?utm_source=generator',
  'https://open.spotify.com/embed/track/6MXXY2eiWkpDCezVCc0cMH?utm_source=generator',
  'https://open.spotify.com/embed/track/4UQMOPSUVJVicIQzjAcRRZ?utm_source=generator',
  'https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf?utm_source=generator',
  'https://open.spotify.com/embed/track/5TRPicyLGbAF2LGBFbHGvO?utm_source=generator',
  'https://open.spotify.com/embed/track/3DK6m7It6Pw857FcQftMds?utm_source=generator',
  'https://open.spotify.com/embed/track/2gZUPNdnz5Y45eiGxpHGSc?utm_source=generator',
  'https://open.spotify.com/embed/track/5g1vtHqi9uV7xtYeCcFOBx?utm_source=generator',
  'https://open.spotify.com/embed/track/5SkRLpaGtvYPhw02vZhQQ9?utm_source=generator',
  'https://open.spotify.com/embed/track/1auxYwYrFRqZP7t3s7w4um?utm_source=generator',
];

const randNum = () => {
  return Math.floor(Math.random() * 10);
};

function TrackEmbed({ srcUrl }) {
  return (
    <div style={{ backgroundColor: '#242424' }}>
      <h1>Goated Kanye Music</h1>
      <iframe
        style={{ width: '100%', height: '352px' }}
        allow="autoplay"
        src={srcUrl} // Using a JavaScript expression for dynamic URL
      ></iframe>
    </div>
  );
}

function Songs() {
  // const [songUrl, setSongUrl] = useState('');

  // useEffect(() => {
  //   setSongUrl(ALL_SONGS[randNum()]);
  //   console.log(songUrl);
  // }, []);

  return (
    <div style={{marginTop: '15%'}}>
      <Navbar />
      <TrackEmbed srcUrl="https://open.spotify.com/embed/track/4EWCNWgDS8707fNSZ1oaA5?utm_source=generator" />
      {/* <div>
        <button onClick={setSongUrl(ALL_SONGS[randNum()])}>New Song</button>
      </div> */}
    </div>
  );
}

export default Songs;
