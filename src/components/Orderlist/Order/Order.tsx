import React from "react";
import './Order.css'

interface data {
    id: number;
    state: boolean;
    brand: string;
    model: string;
  }

const order = ({id,state,brand,model}:data) =>{
    return(
        <div className="order">
                    <h2>رقم الطلب : <span>{id}</span></h2>
                    <p>تاريخ الطلب : <span>2023-01-24</span></p>
                    <hr/>
                    <h3>الحالة الداخلية : <span>{state?"بإنتظار التسعير":"تم التسعير"}</span></h3>
                    <div>
                        <p>البراند : <span>{brand}</span></p>
                        <p style={{marginRight:'30%'}}>الموديل : <span>{model}</span></p>
                    </div>
                </div>
    )
}
export default order;