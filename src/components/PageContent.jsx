import AboutPage from './AboutPage';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProjectsPage from './ProjectsPage';

function PageContent() {
  return (
    <div className="PageContent" style={{ padding: "70px 50px 0px 50px" }}>
      <HomePage/>
      <AboutPage/>
      <ProjectsPage/>
      <ContactPage/>
    </div>
  );
}

export default PageContent;