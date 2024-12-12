import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"


const Layout =()=>{
    return(<>
    
        <Header/>
        <div className="container ">
          <Outlet/>
          {/* <Outlet/> OR <main/>  */}
        </div> 
        <Footer/> 
       
    
    </>);
    
 };
 export default Layout;