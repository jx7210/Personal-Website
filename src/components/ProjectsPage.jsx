import { Typography } from "@mui/material";

function ProjectsPage() {
  return (
    <div 
      className="ProjectsPage"
      id='projects-page'
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: "15vh",
        paddingBottom: '10vh',
        borderBottom: '2px solid #e6e6e6'
      }}
    >
      <Typography variant="h2"><b>My Projects</b></Typography>
      <p>Work In Progress...</p>
    </div>
  );
}

export default ProjectsPage;