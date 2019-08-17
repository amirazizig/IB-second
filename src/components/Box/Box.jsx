import React from 'react';
import Header from '../Header/Header';
import Detail from '../Detail/Detail';
import Comment from '../Comment/Comment';
import Pay from '../Pay/Pay';
import './Box.css';

          const Box =(props)=>{
              return(
<div className="box">
         <Header header={props.header}/>

          

          <div className="menu">
          <ul className="nav">
    <li className="nav-item col-4">
      <a onClick={props.toggleDetail} className={"nav-link "+ (props.isDetail ? 'active': null)} href="#">توضیحات</a>
    </li>
    <li className="nav-item col-4">
      <a onClick={props.toggleComment} className={"nav-link "+ (props.isComment ? 'active': null)} href="#">نظرات</a>
    </li>
    <li className="nav-item col-4">
      <a onClick={props.togglePay} className={"nav-link "+ (props.isPay ? 'active': null)} href="#">پرداخت</a>
    </li>
    
  </ul>
          </div>    

          {props.isDetail ? <Detail/> : null}
          {props.isComment ? <Comment/> : null}
          {props.isPay ? <Pay/> : null}




          </div>
              )
          }
          export default Box;