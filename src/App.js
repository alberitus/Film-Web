import logo from './logo.svg';
import './App.css';
import './style/landing.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';

function App() {
  return (
    <div>
      <div className="movie-bg">
        <NavigationBar />
        <Intro />
      </div>
      <div className='trending'>
        <Trending />
      </div>
    </div>
  );
}

export default App;
