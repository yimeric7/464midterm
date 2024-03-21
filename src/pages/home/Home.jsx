import KanyePic from '../../assets/kanye-hands1.jpg';
import Navbar from '../../components/navbar/Navbar.jsx';

const BackgroundImage = ({ imageUrl }) => {
  const sectionStyle = {
    width: '100%',
    height: '100vh', // Use 100% of the viewport height
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover', // Ensure the image covers the whole screen
    backgroundPosition: 'center', // Center the background image
    position: 'fixed', // Make it cover the whole page
    top: 0,
    left: 0,
    zIndex: -1, // Ensure it's behind other content
  };

  return <div style={sectionStyle} />;
};

function Home() {
  return (
    <div>
      <Navbar />
      <BackgroundImage imageUrl={KanyePic} />
    </div>
  );
}

export default Home;
