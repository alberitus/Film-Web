import logo from './logo.svg';
import './App.css';
import './style/landing.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/SuperHero';

function App() {
  return (
    <div>
      <div className="movie-bg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
