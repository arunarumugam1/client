import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu(){
    return(
        <>
        {/* <Link to="/Dashboard">Home</Link><br/>
        <Link to="/Profilephoto">Profile Photo</Link><br/>
        <Link to="/Education">Education Detials</Link><br/>
        <Link to="/Softskill">Soft Skill</Link> */}
        <div className='table-active'>
            <table className='table table-bordered mt-3'>
                <tbody>
                        <tr>
                        <th>
                        <Link to="/Dashboard">Home</Link><br/>
                        </th>    
                        </tr>
                        <tr>
                        <th>
                        <Link to="/Profilephoto">Profile Photo</Link><br/>
                        </th>    
                        </tr>
                        <tr>
                        <th>
                        <Link to="/Education">Education Detials</Link><br/>
                        </th>   
                        </tr>
                        <tr>
                        <th>
                        <Link to="/Softskill">Soft Skill</Link>
                        </th>
                        </tr>
                        <tr>
                        <th>
                        <Link to="/Experience">Work Experience</Link>
                        </th>
                        </tr>
                        <tr>
                        <th>
                        <Link to="/Certificate">Certifications</Link>
                        </th>
                        </tr>
                </tbody>
            </table>

        </div>
        </>
    )
}