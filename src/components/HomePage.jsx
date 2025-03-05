import { Typography } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';

function HomePage() {
  const scrollToAbout = () => {
    const nextSection = document.getElementById("about-page");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className="HomePage" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 'calc(100vh - 70px)'
      }}
    >
        <Typography id='home-page' variant='h5'>Hey there! I'm</Typography>
        <Typography variant='h2'>
          <b>
          <TypeAnimation
            sequence={[
              'Joanne',
            ]}
            speed={{type: 'keyStrokeDelayInMs', value: 250}}
            cursor={true} // Blinking cursor
          />
          </b>
        </Typography>
        <img 
          src={`${process.env.PUBLIC_URL}/profile-picture.png`}
          alt="Profile" 
          style={{ 
            width: '300px', 
            height: '300px', 
            borderRadius: '50%', 
            backgroundColor: 'pink',
            margin: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        />
        <Typography variant='h5'>and welcome to my website.</Typography>
        {/* Down Arrow */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            cursor: "pointer",
            animation: "bounce 1.5s infinite",
          }}
          onClick={scrollToAbout}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>
        </div>
    </div>
  );
}

export default HomePage;