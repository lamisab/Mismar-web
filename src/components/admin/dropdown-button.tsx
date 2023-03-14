import { useState } from "react";

function DropdownButton() {

  const [open,setOpen] = useState<boolean>(false);

  const handleDropdownFocus = (state : boolean)=>{
      setOpen(!state);
  }
    return ( 


       <div className=" pt-[31px] pr-[54px] pl-[54px] pb-[16px] ">
         <button 
         onClick={(e)=>handleDropdownFocus(open)}
        // data-dropdown-toggle="dropdownId"
        className="sticky text-white bg-[#252525] focus:ring-1 rounded-[4px] text-sm 
         w-[313px] h-[57px] left-[961px] top-[31px] 
           items-center 
         " type="button"> Admin name 
          </button>

          {
            open && 
            <div className="  flex flex-col cursor-pointer  ">
              <ul className="  pt-5  bg-slate-200 cursor-pointer rounded-lg  ">
              <li className="pr-3 hover:bg-mainColor "> تسجيل الخروج</li>
             
            </ul>
            </div>
          }

                







       </div>
     );
}

export default DropdownButton;