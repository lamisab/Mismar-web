import React,{ useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  const [open,setOpen] = useState<boolean>(false);

  const handleDropdownFocus = (state : boolean)=>{
      setOpen(!state);
  }
    return ( 
        <>
        <aside id="separator-sidebar" className="fixed top-0 right-0 z-40 w-64 h-screen" >
  <div className="h-full w-[400px] bg-sideBarColor ">

    <div className="px-[112px] pt-[60px]">
      <img className="  h-[163px] w-[163px]   rounded-full bg-white " src={"assets/images/logo-mismar.png"} alt=" LOGO"/>
    </div>

     <div className="pt-[93px] p ">

  <ul className="list-none space-y-3  text-white ">
    <li className=" hover:text-hoverColor    " >
        <Link to={"/home"} className=""> الرئيسية</Link>
    </li>

    <li className="">

    <button 
         onClick={(e)=>handleDropdownFocus(open)}
        
        className=" text-white text-sm  hover:text-hoverColor" > الطلبات
          </button>

          {
            open && 
            <div className="bg-gray-500 p-3 ">
              <ul className=" pt-2   ">
              <li className="  hover:text-hoverColor "> 
              <Link to={"/all-orders"} className=""> كل الطلبات</Link>
              </li>
              <li className=" hover:text-hoverColor"> 
              <Link to={"/communication-orders"} className=""> طلبات التواصل</Link>
              </li>
              <li className=" hover:text-hoverColor"> 
              <Link to={"/return-orders"} className=""> طلبات الإسترجاع</Link>
              </li>
              
             
            </ul>
            </div>
          }
    </li>

    <li className=" hover:text-hoverColor    " >
        <Link to={"/home"} className=""> العروض</Link>
    </li><li className=" hover:text-hoverColor    " >
        <Link to={"/home"} className=""> الآوقات</Link>
    </li><li className=" hover:text-hoverColor    " >
        <Link to={"/home"} className=""> النظام</Link>
    </li>

  </ul>
    </div>
     
  </div>
</aside>
        </>
     );
}

export default Sidebar;
