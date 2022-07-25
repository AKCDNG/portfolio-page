import './index.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1 data-testid='heading-portfolio' className="heading-portfolio">Welcome To My Personal Portfolio!</h1>
      <Navbar />
    </div>
  );
}

export default App;
