import { Button } from 'primereact/button';
import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom'


const Navbar = () => {
    const location = useLocation();
    const [user, setuser] = useState(true);
    
    const navlinks = [
      { path:'/', name:"Home"},
      { path:'/mens', name:"Mens"},
      { path:'/womens', name:"Womens"},
      { path:'/kids', name:"Kids"},
      { path:'/winter', name:"Winter Collections"},
      { path:'/summer', name:"Summer Collections"},
      { path:'/about', name:"About"},
      { path:'/contact', name:"Contact Us"}
    ];
    
    const userupdate = () =>{
      setuser(!user);
    }

    return ( 
      <div className="navbar">
        <nav >
          <div id="logo">
             <Link to="/"><img src='http://localhost:5000/assets/logo.png' alt=""/></Link>
          </div>
               {navlinks
                  .filter(link=> link.path!==location.pathname)
                  .map(link=>(
                    <li key={link.name} ><Link to={link.path} className='links'>{link.name}</Link></li>
                  ))}

                {user?
                <Link to="/login"><Button label="Login/Signup" id='login-btn' onClick={userupdate} /></Link>:
                ""
                }
        </nav>
      </div>
     );
}
 
export default Navbar;