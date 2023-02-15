import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Index from './component/index';
import Signreg from './component/signreg';
import Signup from './component/signup';
import Signin from './component/signin';
import Dashboard from './component/dashboard';
import Profilephoto from './component/profilephoto';
import { Education } from './component/education';
import { Softskill } from './component/softskill';
import { Experience } from './component/experience';
import { Certificate } from './component/certificate';
import { Home } from './component1/Home/Home';
import { Portfolio } from './component1/portfolio';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path='/Signreg' element={<Signreg />}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/profilephoto" element={<Profilephoto/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/softskill" element={<Softskill/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
