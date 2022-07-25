import './index.css';
import Navbar from './components/Navbar';
import AboutMe from './components/content/AboutMe';
import Experience from './components/content/Experience';
import Projects from './components/content/Projects';
import TechStacks from './components/content/TechStacks';
import Contact from './components/content/Contact';

function App() {
  return (
    <div className='App'>
      <h1 data-testid='heading-portfolio' className='heading-portfolio'>
        Welcome To My Personal Portfolio!
      </h1>
      <Navbar />
      <section className="AboutMe">
        <AboutMe />
      </section>
      <section className="experience">
        <Experience />
      </section>
      <section className="projects">
        <Projects />
      </section>
      <section className="tech-stacks">
        <TechStacks />
      </section>
      <section className="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
