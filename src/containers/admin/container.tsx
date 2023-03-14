import React from "react";
import Sidebar from '../../components/SideBar/Sidebar'
import Navbar from "src/components/NavBar/Navbar";
import Filter from "src/components/Filter/Filter";
import Orderlist from "src/components/Orderlist/Orederlist";
import './container.css'

// type props = {
//     children: JSX.Element
//   };

const container = () =>{
    return(
    <div className="App">
      <Sidebar />
      <div className="new1">
        <Navbar />
        <Filter />
        <Orderlist />
      </div>
    </div>
    )
}
 export default container;