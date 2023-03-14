import React,{ useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  const [open,setOpen] = useState<boolean>(false);

  const handleDropdownFocus = (state : boolean)=>{
      setOpen(!state);
  }
  const [changeColor,setChangeColor] = useState('text-mainColor');

  const handleColor = (e: React.MouseEvent<HTMLElement>)=>{
    setChangeColor('text-white');
  }


  // interface IRoutes {
  //   route:string | null,
  //   activeColor:string,
  //   unActiveColor:string,
  //   routeName:string,
  //   subRoutes:SubRoutes[],
  // }

  // interface SubRoutes{
  //   route:string ,
  //   activeColor:string,
  //   unActiveColor:string,
  //   routeName:string,

  // }


  // const routes :IRoutes [] =[
  //   {
  //     routeName:'الرئيسيه',
  //     route:null,
  //     activeColor:'text-white',
  //     unActiveColor:'text-mainColor',
  //     subRoutes:[{
  //       routeName:'all orders',
  //       route:'/all-order',
  //       activeColor:'text-white',
  //     unActiveColor:'text-mainColor',
  //     }]
  //   },
  
    // {
    //   routeName:'العروض',
    //   route:'offers',
    //   activeColor:'text-mainColor',
    //   unActiveColor:'text-white'
    // },
  //   {
  //     routeName:'الآوقات',
  //     route:'/home',
  //     activeColor:'text-mainColor',
  //     unActiveColor:'text-white'
  //   },
  //   {
  //     routeName:'النظام',
  //     route:'/system',
  //     activeColor:'text-mainColor',
  //     unActiveColor:'text-white'
  //   },
  // ]


    return ( 
        <>
        
        <aside id="separator-sidebar" className="fixed top-0 right-0 z-40 w-64 h-screen" >
  <div className="h-full w-[400px] bg-sideBarColor ">

    <div className="px-[112px] pt-[60px]">
      <img className="  h-[163px] w-[163px]   rounded-full bg-white " src={"assets/images/logo-mismar.png"} alt=" LOGO"/>
    </div>

     <div className="pt-[93px]  ">

  <ul className="list-none space-y-3  text-white ">
    <div onClick={()=>handleColor}>
      {/* ${changeColor} */}
    <li  className={`hover:text-mainColor active:underline `} >
        <Link to={"/home"} className=""  > الرئيسية</Link>
    </li>

{/* {
          
          routes.map((item,index) => 
          <ul className={`${item.activeColor}`}>
            if ({item.route}==null) {
              
            } else
             <Link to={item.route } className=""  > {item.routeName}</Link>
             
          </ul>
          
          )

          
        } */}
    </div>

    <li className="">

    <button 
         onClick={(e)=>handleDropdownFocus(open)}
        
        className=" text-white text-sm  hover:text-mainColor " > الطلبات
          </button>

          {
            open && 
            <div className="bg-gray-500 p-3 ">
              <ul className=" pt-2   ">
              <li className="  hover:text-mainColor active:underline  "> 
              <Link to={"/all-orders"} className="" > كل الطلبات</Link>
              </li>
              <li className=" hover:text-mainColor active:underline"> 
              <Link to={"/communication-orders"} className=""> طلبات التواصل</Link>
              </li>
              <li className=" hover:text-mainColor active:underline"> 
              <Link to={"/return-orders"} className=""> طلبات الإسترجاع</Link>
              </li>
              
             
            </ul>
            </div>
          }
    </li>

    <li className=" hover:text-mainColor  active:underline  " >
        <Link to={"/home"} className=""> العروض</Link>
    </li><li className=" hover:text-mainColor  active:underline  " >
        <Link to={"/home"} className=""> الآوقات</Link>
    </li><li className=" hover:text-mainColor  active:underline  " >
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
