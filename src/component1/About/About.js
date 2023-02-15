import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import computer from './image4.jpg'

export function About() {
    return(
        <>
        <div className='text-center bgdark text-light  pt-5 pb-5  '>
        <h1>𝙰𝚋𝚘𝚞𝚝 𝙼𝚎</h1>
        <div className='container-fluid mt-5 '>
            <div className='row'>
                <div className=' col-lg-2'>&nbsp;</div>
                <div className='col-lg-4  deve  '>
                    <h3 className='text-dark-50'>Developer Skills</h3>
                    <p className='text-left '>Having a knowledge of Programming languages to define Myself And even  made a research in this domain to fully carry my career apart from others.</p><br/>
                </div>
                
                <div className='col-lg-4 deve ml-1 '>
                    <h3 className='text-dark-50'>Activity</h3>
                    <p>A creative person to change the design in a short time with more reactive which is also a creative responsible for static and  even for the dynamic world.</p><br/>
                </div>
                {/* <div className='col-lg-4  float-right '>
                    <img src={computer} height="260vh" className='deve'/>
                </div> */}

               <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-4 deve pb-5 mt-4'>
                    <h3 className='text-dark-50'>What I do?</h3>
                    <p>I build tools & services for people to communicate, collaborate, & produce. Ideas aren't bound by place & time. Implementation shouldn't be either.</p>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
            
        </div>




        </div>


        
        </>
    );
}