import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';
import StarRatings from 'react-star-ratings';
import {useState,useEffect} from 'react';

export function Skills() {
    let userid = localStorage.getItem('userid');

    const[viewsoftskill,setViewsoftskill]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/View_softskill/'+userid)
        .then(response=>response.json())
        .then(json=>setViewsoftskill(json));
    },[]);
    
    return(
        <>
        <div className='container-fluid text-center bgdark mt-1 pb-5 '>
        
            <div className='container'>
                <h1 className='text-primary text-center p-5'> 𝕊𝕜𝕚𝕝𝕝 ℝ𝕒𝕥𝕚𝕟𝕘𝕤</h1>
            
            <div className='row  '>
               
               <div className='col-lg-2'>&nbsp;</div>
               <div className='col-lg-4  text-info text-center '>
                {viewsoftskill.map((v,i)=>(
                    <>
                     <h3>HTML5 :</h3><StarRatings rating={parseInt(v.html)} starRatedColor="gold" starDimension='35' numberOfStars={6}   name='rating'/><br/><br/>

                <h3>CSS3 :</h3><StarRatings rating={parseInt(v.css)} starRatedColor="gold" starDimension='35' numberOfStars={6}   name='rating'/><br/><br/>
                <h3>Bootstrap :</h3><StarRatings rating={parseInt(v.html)} starRatedColor="gold" starDimension='35' numberOfStars={6}   name='rating'/><br/><br/>
                <h3>JavaScript :</h3><StarRatings rating={parseInt(v.html)} starRatedColor="gold" starDimension='35' numberOfStars={6}   name='rating'/><br/><br/>
                
                    </>

                ))}
            
               
               </div>
                {/* <div className='col-lg-2'>&nbsp;</div> */}
                    
               <div className='col-lg-4 text-info text-center'>
               {viewsoftskill.map((v,i)=>(
                    <>
                <h3>React JS :</h3><StarRatings rating={parseInt(v.reactjs)} starRatedColor="gold" starDimension='35' numberOfStars={6}   name='rating'/><br/><br/>
                <h3>Node Js :</h3><StarRatings rating={parseInt(v.nodejs)} starRatedColor="gold" starDimension='35' numberOfStars={6}   name='rating'/><br/><br/>
                <h3>MySQL :</h3><StarRatings rating={parseInt(v.mysql)} starRatedColor="gold" starDimension='35' numberOfStars={6}   name='rating'/><br/><br/>
                </>

                ))}
                
               </div>
            </div>
            </div>
        </div>
        </>
    );
}