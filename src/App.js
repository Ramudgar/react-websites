
// import { Button } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Mid from './component/mid';
import EmpHome from './component/employee/emp_home';
function App() {
  return (
<>
<BrowserRouter>
<EmpHome/>
{/* <Header/> */}

{/* <Mid></Mid> */}
{/* <Footer/> */}
</BrowserRouter>

</>
  );
}

export default App;
