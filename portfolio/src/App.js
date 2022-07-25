import './index.css';
import Navbar from './components/Navbar';
import Welcome from './components/content/Welcome'
import AboutMe from './components/content/AboutMe';
import Experience from './components/content/Experience';
import Projects from './components/content/Projects';
import TechStacks from './components/content/TechStacks';
import Contact from './components/content/Contact';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <section className="welcome">
        <Welcome />
      </section>
      <section className='about-me'>
        <AboutMe />
      </section>
      <section className='experience'>
        <Experience />
      </section>
      <section className='projects'>
        <Projects />
      </section>
      <section className='tech-stacks'>
        <TechStacks />
      </section>
      <section className='contact'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
