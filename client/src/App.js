import './App.css'; // Import the CSS file
import Navbar from './components/Navbar';
import FlashMessage from './components/FlashMessage';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <div className='app-container'>
        {/* <FlashMessage /> */}
        <About />
      </div>
      
    </div>
  );
}

export default App;
