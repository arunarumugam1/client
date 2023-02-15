import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Home } from './Home/Home';
import 'bootstrap/dist/js/bootstrap.bundle';

export function Header() {
    return(
        <>
        <div className='container'>
            

        <nav className="navbar navbar-expand fixed-top navbar-dark nav-justified  bg-dark">
         <button className='navbar-toggler' type='button' data-toggle='navbarTogglerDemo01'></button>
        {/* <span className='navbar-toggler-icon'></span> */}
         <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <ul className='navbar-nav mr-auto '>
            <li className='nav-item'>
              <Link to="/" className='nav-link text-light ml-3'><h6>Home</h6></Link>
            </li>
            <li className='nav-item'>
              <Link to="/" className='nav-link text-light ml-3'><h6>About</h6></Link>
            </li>
            <li className='nav-item'>
              <Link to="/" className='nav-link text-light ml-3'><h6>Edication</h6></Link>
            </li>
            <li className='nav-item'>
              <Link to="/" className='nav-link text-light ml-3'><h6>Certification</h6></Link>
            </li>
            <li className='nav-item'>
              <Link to="/" className='nav-link text-light ml-3'><h6>Skill</h6></Link>
            </li>
            <li className='nav-item'>
              <Link to="/" className='nav-link text-light ml-3'><h6>Contact</h6></Link>
            </li>
          </ul>
         </div>
        </nav>
        </div>

        </>
    )
}
{/* <nav class="navbar fixed-top navbar-dark bg-primary">
  <a class="navbar-brand" href="#!">Fixed top</a>
</nav> */}
