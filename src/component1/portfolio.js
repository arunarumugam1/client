import react from 'react';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import { Home } from './Home/Home';
// import { Home } from './Home/Home';
import { About } from './About/About';
import { Education } from './Educations/Edication';
import { Certificate1 } from './certification/Certification';
import { Skills } from './Skills/skills';
import { Header } from './Header';
import { Contact } from './contact/Contact';


// import { Education } from './Education/Edication';
// import { Certification } from './certification'
// import { Skills } from './Skills'
// import { Contact } from 'react';



export function Portfolio(){

    return(
        <>
        {/* <Home/>
        <About/>
        <Education/>
        <Certification/>
        <Skills/>
        <Contact/> */}
        <Header/>
        <Home/>
        <About/>
        <Education/>
        <Certificate1/>
        <Skills/>
        <Contact/>
        
       
        
        
        
        
        </>
    )
}