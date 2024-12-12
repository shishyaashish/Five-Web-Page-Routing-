import { Link} from "react-router-dom"
const Header =()=>{
    return(<>
    <div className="container-fluid bg-dark p-3">
        <div className="row">
        <div className="col-sm-3 "><h1 class="bg-white">Logo Section</h1></div>
        <div className="col-sm-9 ">
            <nav >
            <ul className=" nav">
                 <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/AboutUs" className="nav-link">About us</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Gallery" className="nav-link">Gallery</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/ContactUs" className="nav-link">Contact us</Link>
                    </li>

               </ul>

            </nav>
        </div>
        </div>  
        </div> 
    
    </>);
    
 };
 export default Header;