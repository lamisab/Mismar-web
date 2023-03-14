import React, { useState } from "react";
import Order from './Order/Order'
import './Orderlist.css';
// import myData from '../../data.json';
var myData=[
    {
        "id":1436673,
        "state":true,
        "brand":"KIA",
        "model":"LX"
    },
    {
        "id":6591473,
        "state":false,
        "brand":"lxs",
        "model":"CV"
    },
    {
        "id":3561478,
        "state":true,
        "brand":"KIA",
        "model":"VAR"
    },
    {
        "id":3021520,
        "state":false,
        "brand":"NISSAN",
        "model":"SAD"
    },
    {
        "id":3325697,
        "state":true,
        "brand":"NISSAN",
        "model":"ROD"
    },
    {
        "id":2031963,
        "state":true,
        "brand":"BOLD",
        "model":"Mov"
    },
    {
        "id":2114589,
        "state":false,
        "brand":"BOLD",
        "model":"ND"
    },
    {
        "id":3217956,
        "state":true,
        "brand":"lxs",
        "model":"MD"
    }
];
const Orders = () =>{
    const [price,setPrice] = useState(true);
    const [filter,setFilter] = useState(false);

    const onSiteChanged=()=>{

    }
    return(
        <div className="orders">
            <h3>عدد الطلبات <span></span></h3>
            <div className="orderstate">
                <div>
                    <p>الطلب :</p>
                    <input type="radio" id="html" name="order" value="HTML" />
                    <label >طلب شراء</label>
                    <input type="radio" id="css" name="order" value="CSS" />
                    <label >طلب تسعير</label>
                </div>
                <div>
                    <p>الحالة :</p>
                    <input type="radio" id="wait" name="state" value="HTML" onChange={() => { setPrice(false); setFilter(true)}}/>
                    <label >بانتظار تسعير</label>
                    <input type="radio" id="done" name="state" value="CSS" onChange={() => { setPrice(true); setFilter(true)}}/>
                    <label >تم التسعير</label>
                </div>
            </div>
            <div className="ordersCon">
                {filter?myData.filter(item => item.state==price).map((item) => (<Order {...item} />))
                
                :myData.map((item) => (
                    <Order {...item} />
                ))}
            </div>
            <div className="pagesCon">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgArrow" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgArrow" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
            </div>

                <div style={{backgroundColor:'red',color:'#fff'}}>1</div>

            <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgArrow" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgArrow" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>

                </div>

        </div>
    )
}

export default Orders;