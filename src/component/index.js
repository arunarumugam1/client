import {Link} from 'react-router-dom';
import './index.css'

export default function Index(){
   
    return(
        <>
        <div className='main container text-center  mt-5 '>
            <h2 className="text-center mt-5  " >Welcome</h2>
            <h4 className='text-center mt-2 text-warning'>Do you want to Signup/Login</h4><br/>
             <Link to="/Signup">
             <button type="button" className="btn btn-primary ">Signup</button>
             </Link>&nbsp;
             <Link to="/Signin">
             <button type="button" className="btn btn-primary ">Login</button>
             </Link><br/><br/>
             
        </div>
        </>
    )
}