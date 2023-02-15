import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

export function Softskill(){

    // let userid = localStorage.getItem('userid');
    // const[viewsoftskill,setViewsoftskill]=useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:3000/View_softskill/'+userid)
    //     .then(response=>response.json())
    //     .then(json=>setViewsoftskill(json));
    // },[]);

    let userid = localStorage.getItem('userid');

    const[viewsoftskill,setViewsoftskill]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/View_softskill/'+userid)
        .then(response=>response.json())
        .then(json=>setViewsoftskill(json));
    },[]);
     let handlesubmit =(event)=>{
        event.preventDefault();

        var datastring = new FormData(event.target);
        var config = {Headers:{'enctype':'multipart/form-data'}};

        axios.post('http://localhost:3000/Add_Softskill',datastring,config)
        .then(function(response){
            if(response.data.status === 'error'){
                alert("error");
                 window.location.reload();
            }
            else if(response.data.status === 'Registered'){
                alert("uploaded");
                window.location.reload();
            }
            else {
                alert('contect admin');
                 window.location.reload();
            }
        })
        .catch(function(error) {
            alert(error);
             window.location.reload();
        })
     }

    // axios.post('http://localhost:3000')



    return(
        <>
        <div className='container text-center bg-dark text-warning'>
        
             <h3 className='bg-secondary mt-4'>SOFT SKILLS</h3>

             <form onSubmit={handlesubmit}>            
               <div className='row'>
                <div className='col-lg-4'>
                   <h4 className='text-center mt-4'>Front End</h4>
                    <label className='col-lg-7 mt-4'><h6>HTML</h6></label><br/>
                     <select className='coustome-select col-lg-7' name='html' id='html'>
                        <option selected></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        
                        </select><br/>

                         <label className='col-lg-7 mt-2'><h6>CSS</h6></label><br/>
                     <select  name='css' id='css' className='coustome-select col-lg-7'>
                        <option selected></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                       
                        </select><br/> 

                         <label className='col-lg-7 mt-2'><h6>Bootstrap</h6></label><br/>
                     <select name='bootstrap' id='bootstrap' className='coustome-select col-lg-7'>
                        <option selected></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        
                        </select><br/>

                         <label className='col-lg-7 mt-2'><h6>JavaScript</h6></label><br/>
                     <select  name='javascript' id='javascript'  className='coustome-select col-lg-7'>
                        <option selected></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                       
                        </select>                 
                </div>
                <div className='col-lg-4'>
                   <h4 className='text-center mt-4'>Back End</h4>
                    <label className='col-lg-7 mt-1'><h6>React JS</h6></label><br/>
                     <select name='reactjs' id='reactjs'  className='coustome-select col-lg-7'>
                        <option selected></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                       
                        </select><br/>

                         <label className='col-lg-7 mt-2'><h6>Node JS</h6></label><br/>
                     <select name='nodejs' id='nodejs'  className='coustome-select col-lg-7'>
                        <option selected></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        </select><br/> 
                </div>

                <div className='col-lg-4'>
                   <h4 className='text-center mt-4'>DataBase</h4>
                    <label className='col-lg-7 mt-1'><h6>MySql</h6></label><br/>
                     <select name='mysql' id='mysql' className='coustome-select col-lg-7'>
                        <option selected></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='4'>5</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        </select>
                </div>
            </div><br/>
            <div className='text-center mb-5 pb-5'>
                <input type='hidden' id='userid' name='userid' value={userid}/>
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
                                    <th>HTML</th>
                                    <th>CSS</th>
                                    <th>BOOTSTRAP</th>
                                    <th>JavaScript</th>
                                    <th>React JS</th>
                                    <th>Node JS</th>
                                    <th>MySql</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                            {
                                viewsoftskill.map((v,i)=>(
                                    <tr>
                                        <td>{v.html}</td>
                                        <td>{v.css}</td>
                                        <td>{v.bootstrap}</td>
                                        <td>{v.javascript}</td>
                                        <td>{v.reactjs}</td>
                                        <td>{v.nodejs}</td>
                                        <td>{v.mysql}</td>
                                        
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
        </>
    )
}