import './index.css';
import Navbar from './components/Navbar';
import Welcome from './components/content/Welcome';
import AboutMe from './components/content/AboutMe';
import Experience from './components/content/Experience';
import Projects from './components/content/Projects';
import TechStacks from './components/content/TechStacks';
import Contact from './components/content/Contact';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div id='container'>
        <section className='welcome' id='welcome'>
          <Welcome />
        </section>
        <section className='about-me' id='about-me'>
          <AboutMe />
        </section>
        <section className='experience' id='experience'>
          <Experience />
        </section>
        <section className='projects' id='projects'>
          <Projects />
        </section>
        <section className='tech-stacks' id='tech-stacks'>
          <TechStacks />
        </section>
        <section className='contact' id='contact'>
          <Contact />
        </section>
        <section className='rest'></section>
      </div>
    </div>
  );
}

export default App;
