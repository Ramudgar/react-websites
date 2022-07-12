
// import { Button } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/footer';
import Demo from './component/header/header';
import Mid from './component/mid';

function App() {
  return (
<>
<BrowserRouter>
<Demo/>
{/* <HeroSection/> */}
<Mid></Mid>
<Footer/>
</BrowserRouter>

</>
  );
}

export default App;
