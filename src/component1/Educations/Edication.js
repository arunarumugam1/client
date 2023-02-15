import 'bootstrap/dist/css/bootstrap.min.css';

import education from './ed1.jpg';
import {useState,useEffect} from 'react';
import './Education.css';
export function Education() {
    let userid = localStorage.getItem('userid');
    const[vieweducation,setVieweducation]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/View_education/'+userid)
        .then(response=>response.json())
        .then(json=>setVieweducation(json));
    },[]);
    return(
        <>
        <div className='container-fluid bgdark mt-1 text-light text-center pt-5 pb-5'>
            <h1 className='text-warning'>ᎬᎠႮᏟᎪͲᏆϴΝ ᎠᎬͲᎪᏆᏞՏ</h1><br/>
          <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-lg-6 '>
                <img src={education}  className=' ed col-lg-8 col-sm-5' />
                </div>
                
                <div className='col-lg-6 text-left'>
                    <div >
                        <div className='row mt-4 '>
                <div className='col-sm-1 '>&nbsp;</div>
                            <div className='col-sm-11 '>
                                {
                                    vieweducation.map((v,i)=>(
                                        <>
                                           <h2 className='text-dark mt-5'>Bachelor Degree</h2>
                                           <h4>college Name : {v.ug_instution}</h4>
                                           <h4>Department : {v.ug_grade}</h4>
                                           <h4>Percentage : {v.ug_percentage}</h4>
                                        </>
                                    ))
                                }

                               
                            </div>
                            <div className='col-sm-1 '>&nbsp;</div>
                            <div className='col-sm-11 '>
                                {
                                    vieweducation.map((v,i)=>(
                                <>
                                <h2 className='text-dark mt-5'>Higher secondary School</h2>
                                <h4>School Name : {v.hsc_std} </h4>
                                <h4>Subject : {v.hsc_grade}</h4>
                                <h4>Percentage : {v.hsc_percentage}</h4>
                                </>
                                ))
                                }
                            </div>
                            <div className='col-sm-1 '>&nbsp;</div>
                            <div className='col-sm-11 '>
                                {
                                    vieweducation.map((v,i)=>(
                                        <>
                                <h2 className='text-dark mt-5'>Secondary School </h2>
                                <h4>School Name : {v.sslc_std} </h4> 
                                <h4>Subject : {v.sslc_grade}</h4>                              
                                <h4>Percentage : {v.sslc_percentage}</h4>
                                        </>
                                ))
                                }
                            </div>
                            
                            
                        </div>
                    </div>
                </div>


                

            </div>
          </div>
        </div>

        </>
    );
}