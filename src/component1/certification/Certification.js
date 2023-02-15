import 'bootstrap/dist/css/bootstrap.min.css';
import Scratch from '../certification/Scratch.jpg';
import Javascript  from '../certification/JavaScript.jpg';
import HTML  from '../certification/HTML.jpg';
import JAVA  from '../certification/Java.jpg';
import './Certification.css';
export function Certificate1() {
    return(
        <>
        <div className='container-fluid bgdark text-center mt-1 pt-5 pb-5'>
            <h1 className='text- font-weight-bold '>𝕰𝖝𝖙𝖗𝖆 𝕮𝖊𝖗𝖙𝖎𝖋𝖎𝖈𝖆𝖙𝖊𝖘</h1>
            <div className='row mt-5'>
                <div className='col-lg-6 p-3'>
                    
                    <img src={Scratch}  className='col-lg-9 ml-5' />
                </div> 
                 <div className='col-lg-6 p-3 '>
                    
                    <img src={Javascript}  className='col-lg-9 mr-5' />
                </div> 
                <div className='col-lg-6 p-3 '>
                    
                    <img src={HTML}  className='col-lg-9 ml-5' />
                </div> 
                <div className='col-lg-6 p-3 '>
                    
                    <img src={JAVA}  className='col-lg-9 mr-5' />
                </div> 
            </div>
        </div>
        {/* <div id="mycarouse" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
    <button type="button" data-bs-target="mycarouse" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="mycarouse" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="mycarouse" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="mycarouse" data-bs-slide-to="2" aria-label="Slide 4"></button>
        </ol>

  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src={HTML} class="d-block p-5 " alt="first img"/>
    </div>
    <div class="carousel-item">
      <img src={Scratch} class="d-block" alt="secound img"/>
    </div>
    <div class="carousel-item">
      <img src={Javascript} class="d-block" alt="third img"/>
    </div>
    <div class="carousel-item">
      <img src={JAVA} class="d-block" alt="fourth img"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="mycarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="mycarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  </div> */}

        </>
    );
}