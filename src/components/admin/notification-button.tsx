import { useState } from "react";

function NotificationButton() {
    const [open,setOpen] = useState<boolean>(false);

  const handleDropdownFocus = (state : boolean)=>{
      setOpen(!state);
  }
       
    return ( 

        
        <div className=" pt-[31px] pr-[54px] pl-[54px] pb-[16px]">
<button  className=" sticky text-white bg-[#333333] focus:ring-1 rounded-[4px] text-sm 
         w-[194px] h-[57px] left-[961px] top-[31px] 
          item-center "
          onClick={(e)=>handleDropdownFocus(open)}
          type="button"> 
 مركز الاشعارات

 
</button>
         
{
            open && 
            <div className="  flex flex-col cursor-pointer  ">
              <ul className="  pt-5  bg-slate-200 cursor-pointer rounded-lg  ">
              
              <li className="pr-3 pt-5 hover:bg-mainColor "> note1 </li>
              <li className="pr-3 hover:bg-mainColor ">  note2 </li>
              
            </ul>
            </div>
          }
          

</div>

        
     );
}

export default NotificationButton;