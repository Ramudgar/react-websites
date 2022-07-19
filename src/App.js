
// import { Button } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Mid from './component/mid';
import HeroSection from './component/herosection';

function App() {
  return (
<>
<BrowserRouter>
<Header/>
{/* <HeroSection/> */}
<Mid></Mid>
<Footer/>
</BrowserRouter>

</>
  );
}

export default App;
