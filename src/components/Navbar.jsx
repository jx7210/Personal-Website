import Typography from '@mui/material/Typography';
import DarkModeButton from './DarkModeButton';
import TabButton from './TabButton';

function Navbar() {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const scrollToAbout = () => {
    const nextSection = document.getElementById("about-page");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProjects = () => {
    const nextSection = document.getElementById("projects-page");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    const nextSection = document.getElementById("contact-page");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div 
      className="Navbar" 
      style={{ 
        height: '70px',
        width: '100%',
        padding: '10px 50px',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        position: 'fixed',
        borderBottom: '2px solid #e6e6e6',
        backgroundColor: 'white',
        zIndex: '100'
      }}
    >
      <div className="Navbar Title" style={{display:'flex'}}>
      <img 
          src="/mac-memoji.png" 
          alt="Logo" 
          style={{ 
            width: '30px', 
            height: '30px',
            marginRight: '10px'
          }}
        />
        <Typography variant="h6">
          <b>Joanne Ou</b>
        </Typography>
      </div>
      <div 
        className="Navbar Tabs"
        style={{ display: 'flex', columnGap: '20px', alignItems: 'center' }}
      >
        <TabButton text='Home'onClick={scrollToHome}/>
        <TabButton text='About'onClick={scrollToAbout}/>
        <TabButton text='Projects'onClick={scrollToProjects}/>
        <TabButton text='Contact'onClick={scrollToContact}/>
        <DarkModeButton/>
      </div>
    </div>
  );
}

export default Navbar;
