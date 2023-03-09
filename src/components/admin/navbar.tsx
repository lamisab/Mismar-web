import { Link } from "react-router-dom";
import NotificationButton from "../notification-button";
import DropdownButton from "./dropdown-button";
import Sidebar from "./sidebar";

function Navbar() {
    return ( 
 

<>


{/* Sidebar  */}

<Sidebar/>


{/* Navbar */}
  
      
         <div className="   flex items-center justify-between w-[1328px] h-[104px] rounded bg-navBarColor shadow-md mr-[400px] mb-10">
           
         <DropdownButton/> 
       <NotificationButton/> 
         </div>


</>
     );
}

export default Navbar;