import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
import Menu from './menu'
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard(){

    let userid = localStorage.getItem('userid');
    const [userdetails,setUserdetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/Get_userdetails/'+userid)
        .then(response=>response.json())
        .then(json=>setUserdetails(json));
    },[]);


    return(
        <>
        <div className="container-fluid ">
            <div className="row"><Header/></div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3"><Menu/></div>
                <div className="col-lg-9">
                    <div className="table-responsive mt-3 text-center">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>FATHERNAME</th>
                                    <th>DATE_OF_BIRTH</th>
                                    <th>EMAIL</th>
                                    <th>PHONE</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                userdetails.map((v,i)=>(
                                    <tr>
                                        <td>{v.name}</td>
                                        <td>{v.fathername}</td>
                                        <td>{v.date_of_birth}</td>
                                        <td>{v.email}</td>
                                        <td>{v.phone}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            <div>
            <Link to="/portfolio">
                  <button type="submit" name="data_submit" id="data_submit"
                  value="submit" className="btn btn-info text center">Submit</button>
                </Link>
            </div>
        </div>
        </>
    )
}