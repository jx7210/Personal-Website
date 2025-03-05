import { Typography } from "@mui/material";

function AboutPage() {
  return (
    <div
      id="about-page"
      style={{
        height: "100vh",
        paddingTop: "15vh",
        paddingBottom: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '2px solid #e6e6e6'
      }}
    >
      <div className="about-text" style={{width: '50%'}}>
        <Typography variant="h2"><b>About Me</b></Typography>
        <p>
        I'm currently a 4th year Commerce and Computer Science student at UNSW, 
        and an aspiring software developer with full-stack capabilities.
        Outside of learning new frameworks and working on cool projects, I like:
        <ul style={{paddingLeft: '20px'}}>
          <li>Travelling and exploring the world 🌏</li>
          <li>Watching Netflix and listening to music 🍿🎵</li>
          <li>Getting creative on my ipad 🖌️</li>
          <li>Trying new restaurants and experimenting in the kitchen 🍜</li>
          <li>Going on hikes to reconnect with nature 🌿</li>
        </ul>
        </p>
      </div>
      <img src={`${process.env.PUBLIC_URL}/about.png`} alt="about"/>
    </div>
  );
}

export default AboutPage;