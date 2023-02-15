import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Header from './header'
import Menu from './menu'

export function Experience(){

    let userid = localStorage.getItem('userid');
    let handlesubmit =(event)=>{
       event.preventDefault();

       var datastring = new FormData(event.target);
       var config = {Headers:{'enctype':'multipart/form-data'}};

       axios.post('http://localhost:3000/Add_Experience',datastring,config)
       .then(function(response){
           if(response.data.status === 'error'){
               alert("error");
                window.location.reload();
           }
           else if(response.data.status === 'uploaded'){
               alert("uploaded Successfully");
               window.location.reload();
           }
           else {
               alert('contact admin');
                window.location.reload();
           }
       })
       .catch(function(error) {
           alert(error);
            window.location.reload();
       })
    }

    return(
        <>
         <div className='container-fluid'>
        
        <div className="row">
                <Header />
            </div>
            <div className='row '>
            <div className='col-lg-2'>
                        <Menu/>
                    </div>
                <div className='col-lg-2'>&nbsp;</div>  
                <div className='col-lg-4 mt-5 text-center'>
                <form onSubmit={handlesubmit}>
                    <h4>Experiences Details</h4>
                    <div className='text-left'>
                        <label>Field :</label>
                        <input type='text'name='field' id='field' className='form-control' placeholder='Name of the Job'/><br/>

                        <label>Experiences :</label>
                        <input type='text' name='experience' id='experience' className='form-control ' placeholder='No of Years/Months '/><br/>

                        <input type='hidden' name='userid' id='userid' value={userid} />
                        <button type='submit' name='data_submit' id='data_submit' className='btn btn-primary' value='submit'>Submit</button>
                        <Link to='/dashboard'>
                            <button type='button ' className='btn btn-danger ml-2 '> Back</button>
                        </Link>
                    </div>
                    </form>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
        </div>
            
        </>
    )
}