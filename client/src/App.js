import './App.css'; // Import the CSS file
import Navbar from './components/Navbar';
import FlashMessage from './components/FlashMessage';

function App() {
  return (
    <div>
      <Navbar />
      <div className='app-container'>
        <FlashMessage />
         
      </div>
    </div>
  );
}

export default App;
