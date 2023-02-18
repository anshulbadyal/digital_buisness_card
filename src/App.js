import './App.css';
import Footer from './components/Footer.js';
import Image from './components/img.js';
import MainBody from './components/main';

function App() {
  return (
    <div className='container'>
      <Image/>
      {/* <div className='card'> */}
        <MainBody/>
        <Footer/>
      {/* </div>  */}
    </div>
    
  );
}

export default App;
