import './App.scss';
import Main from './components/layout/Main';
import ExperiencePage from './pages/experience/Experience';
import AboutPage from './pages/about/About';
import ProjectsPage from './pages/projects/Projects';
import TechnologiesPage from './pages/technologies/Technologies';

function App() {
  return (
    <Main>
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
      <TechnologiesPage />
    </Main>
  );
}

export default App;
