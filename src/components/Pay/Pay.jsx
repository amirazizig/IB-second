import React from 'react';
import './Pay.css';
const Pay=()=>{
    return(
        <div className="col-12 Pay ">

        

        <div class="card ">
          <div class="card-header ">
            افزایش اعتبار 
          </div>
          <div class="card-body">
            <h5 class="card-title">موجودی فعلی شما : 2540 ریال </h5>
            {/* <p class="card-text"> افزایش اعتبار از طریق </p> */}
            <div class="list-group">
          
        </div>
          </div>
          <div className="card-footer">
            
             
              
                <input placeholder="توکن شما" className="form-control" type="text"/>
              
        
            
        <button className="btn btnred">بستن </button>
        <button className="btn btngreen">پرداخت </button>
          </div>
        </div>
        
        </div>
               
    )
}

export default Pay;