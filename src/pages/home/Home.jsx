import KanyePic from '../../assets/kanye-hands1.jpg';
import Navbar from '../../components/navbar/Navbar.jsx';
import Timestamp from '../../components/timestamp/Timestamp.jsx';
import './Home.css'; // Importing the CSS for styling

const BackgroundImage = ({ imageUrl }) => {
  const sectionStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0, // Start with the background image invisible
    animation: 'fadeIn 3s ease-in forwards', // Apply fade-in animation
  };

  return <div style={sectionStyle} />;
};

function Home() {
  return (
    <div>
      <Navbar />
      <Timestamp />
      <BackgroundImage imageUrl={KanyePic} />
      <div className="centered-text">KANYE</div>
    </div>
  );
}

export default Home;
