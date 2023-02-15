import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

export function Education(){
    

    let userid = localStorage.getItem('userid');
    const[vieweducation,setVieweducation]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/View_education/'+userid)
        .then(response=>response.json())
        .then(json=>setVieweducation(json));
    },[]);




     let handlesubmit =(event)=>{
        event.preventDefault();

        var datastring = new FormData(event.target);
        var config = {Headers:{'enctype':'multipart/form-data'}};

        axios.post('http://localhost:3000/Add_Education',datastring,config)
        .then(function(response){
            if(response.data.status === 'error'){
                alert("error");
                // window.location.reload();
            }
            else if(response.data.status === 'Registered'){
                alert("uploaded");
                // window.location.reload();
            }
            else {
                alert('contect admin');
                // window.location.reload();
            }
        })
        .catch(function(error) {
            alert(error);
            // window.location.reload();
        })
     }

    // axios.post('http://localhost:3000')


    return(
        <>
        <div className='container-fluid bg-dark text-warning'>
            <form onSubmit={handlesubmit}>
        <h3 className='text-center mt-4 text-'>EDUCATION DETAILS</h3>
            <div className='row p-3'>
                <div className='col-lg-6 p-3'>
                    <h5 className='text-center'>PG DEGREE</h5>
                <label className='col-lg-3 p-2 mt-3'> <h6>PG Instrution</h6></label>
                <input type="text" className='col-lg-7' id='pg_instution' name='pg_instution'></input><br/>

                <label className='col-lg-3 p-2'><h6>Location</h6></label>
                <input type="text" className='col-lg-7' id='pg_location' name='pg_location'></input><br/>

                <label className='col-lg-3 p-2'><h6>Pg Percentage</h6></label>
                <input type="text" className='col-lg-7' id='pg_percentage' name='pg_percentage'></input><br/>

                <label className='col-lg-3 p-2'><h6>Pg Grade</h6></label>
                <input type="text" className='col-lg-7' id='pg_grade' name='pg_grade'></input><br/>

                <label className='col-lg-3 p-2'><h6>Year of passing</h6></label>
                <input type="text" className='col-lg-7' id='pg_year' name='pg_year'></input>
                
                </div>
                <div className='col-lg-6 p-3'>
                    <h5 className='text-center '>UG DEGREE</h5>
                <label className='col-lg-3 p-2 mt-3'> <h6>UG Instrution</h6></label>
                <input type="text" className='col-lg-7' id='ug_instution' name='ug_instution'></input><br/>

                <label className='col-lg-3 p-2'><h6>Location</h6></label>
                <input type="text" className='col-lg-7' id='ug_location' name='ug_location'></input><br/>
                
                <label className='col-lg-3 p-2'><h6>Ug Percentage</h6></label>
                <input type="text" className='col-lg-7' name='ug_percentage' id='ug_percentage'></input><br/>
                
                <label className='col-lg-3 p-2'><h6>Ug Grade</h6></label>
                <input type="text" className='col-lg-7' name='ug_grade' id='ug_grade'></input><br/>
                
                <label className='col-lg-3 p-2'><h6>Year of passing</h6></label>
                <input type="text" className='col-lg-7' name='ug_year' id='ug_year'></input>
                </div>
                <div className='col-lg-6 p-3'>
                    <h5 className='text-center '>HSC DETAILS</h5>
                <label className='col-lg-3 p-2 mt-3'> <h6>HSC Standard</h6></label>
                <input type="text" className='col-lg-7' id='hsc_std' name='hsc_std'></input><br/>
                <label className='col-lg-3 p-2'><h6>Location</h6></label>
                <input type="text" className='col-lg-7' name='hsc_location' id='hsc_location'></input><br/>
                <label className='col-lg-3 p-2'><h6>Hsc Percentage</h6></label>
                <input type="text" className='col-lg-7' name='hsc_percentage' id='hsc_percentage'></input><br/>
                <label className='col-lg-3 p-2'><h6>Hsc Grade</h6></label>
                <input type="text" className='col-lg-7' name='hsc_grade' id='hsc_grade'></input><br/>
                <label className='col-lg-3 p-2'><h6>Year of passing</h6></label>
                <input type="text" className='col-lg-7' name='hsc_year' id='hsc_year'></input>
                </div>
                <div className='col-lg-6 p-3 '>
                    <h5 className='text-center '>SSLC DETAILS</h5>
                <label className='col-lg-3 p-2 mt-3'> <h6>SSLC Standars</h6></label>
                <input type="text" className='col-lg-7' id='sslc_std' name='sslc_std'></input><br/>
                <label className='col-lg-3 p-2'><h6>Location</h6></label>
                <input type="text" className='col-lg-7' id='sslc_location' name='sslc_location'></input><br/>
                <label className='col-lg-3 p-2'><h6>Sslc Percentage</h6></label>
                <input type="text" className='col-lg-7' id='sslc_percentage' name='sslc_percentage'></input><br/>
                <label className='col-lg-3 p-2'><h6>Sslc Grade</h6></label>
                <input type="text" className='col-lg-7' id='sslc_grade' name='sslc_grade'></input><br/>
                <label className='col-lg-3 p-2'><h6>Year of passing</h6></label>
                <input type="text" className='col-lg-7' id='sslc_year' name='sslc_year'></input>
                </div>
            </div>
             <div className='text-center mb-5 pb-5'>
                <input type='hidden' id='userid' name='userid' value={userid} className='form-control'/>
                <button type='submit' name='data_submit' className='btn btn-primary' value='submit'>submit</button>&nbsp;
                <Link to="/Dashboard">
                  <button type="button" name="data_back" id="data_back"
                  value="back" className="btn btn-danger text center">Go Back</button>
                </Link>
             </div>
             </form>

             </div>


             <div className="table-responsive mt-3 text-center">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ug clg</th>
                                    <th>department</th>
                                    <th>percentage</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                            {
                                vieweducation.map((v,i)=>(
                                    <tr>
                                        <td>{v.ug_instution}</td>
                                        <td>{v.ug_grade}</td>
                                        <td>{v.ug_percentage}</td>
                                        
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    
        
        
        </>
    )

}