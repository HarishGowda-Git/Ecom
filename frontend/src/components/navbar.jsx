import { Button } from 'primereact/button';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            
                <ul>
                   <li>Men</li>
                   <li>Women</li>
                   <li>Children</li>
                   <li>Winter Collection</li>
                   <li>Summer Collection</li>
                   <li>About</li>
                   <li>Contact Us</li>
                </ul>
                <Button label="Login/Sign-Up" id='login-btn'/>
        </nav>
     );
}
 
export default Navbar;