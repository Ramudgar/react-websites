
// import { Button } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Mid from './component/mid';
function App() {
  return (
<>
<BrowserRouter>
<Header/>
<Mid></Mid>
<Footer/>
</BrowserRouter>

</>
  );
}

export default App;
