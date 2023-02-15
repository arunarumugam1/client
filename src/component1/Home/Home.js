import 'bootstrap/dist/css/bootstrap.min.css';
import Arun from '../Home/Arun.jpg'
import {useState,useEffect} from 'react';
import './Home.css';

export function Home() {
    let userid = localStorage.getItem('userid');
    const [userdetails,setUserdetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/Get_userdetails/'+userid)
        .then(response=>response.json())
        .then(json=>setUserdetails(json));
    },[]);
    const [viewphoto,setViewphoto] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/View_profilephoto/'+userid)
        .then(response=>response.json())
        .then(json=>setViewphoto(json));
    },[]);
    return(
        <>
        <div className='container-fluid  mt-4 p-2'>
            <div className='row homeimage '>
                <div className='col-lg-2'>&nbsp;</div>

                <div className='col-lg-3 text-center   pt-5 hero home imgLiquidFill imgLiquid imgLiquid_bgSize imgLiquid_ready'>

                    {viewphoto.map((v,i)=>(
                        <>
                           <img src={`/${v.filename}`} className="col-lg-8 p-3 profile "/>

                        </>
                    ))}
                   
                </div>
                
                <div className='col-lg-4 aboutimage text-light mt-5 mb-5'>
                    <div className='col-lg-12 mt-5 mb-5 p-5'>
                    <p className='text-'>I am <br/> 
                    {
                        userdetails.map((v,i)=>(
                            <>
                             <h1 className='text-info'>{v.name}<span className='text-light'>{v.fathername}</span></h1>
                            </>
                        ))
                    }

                   
                    </p>
                    <p className='text-center mt-5'>-“Before software can be reusable <br/>it first has to be usable.” </p>
                    
                    </div>

                </div>
                <div className='col-lg-3'>&nbsp;</div>
            </div>
        </div>
        </>
    );
}