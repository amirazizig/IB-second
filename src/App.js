import React, { Component } from 'react';
import image1 from '../src/components/img/1.jpg';
// import image2 from '../src/components/img/2.jfif';
import Box from './components/Box/Box';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      header:[
        {title:"ایران بلاک",subTitle:"پلتفرم مبتنی بر بلاک چین",imgSrc:image1}
        // {title:"دیجی کالا",subTitle:"خرید و فروش آنلاین",imgSrc:image2},
        // {title:"چنگال ",subTitle:"سفارش غذای آنلاین "}
      ],
      isDetail:true,
      isComment:false,
      isPay:false
    }
  }
  toggleDetail=()=>{
    this.setState({isDetail:true,
      isComment:false,
      isPay:false})
  }
  toggleComment=()=>{
    this.setState({isDetail:false,
      isComment:true,
      isPay:false})
  }
  togglePay=()=>{
    this.setState({isDetail:false,
      isComment:false,
      isPay:true})
  }
  render() {
  

    return (
      
<Box isDetail={this.state.isDetail}
isComment={this.state.isComment}
isPay={this.state.isPay}
toggleComment={this.toggleComment}
toggleDetail={this.toggleDetail}
togglePay={this.togglePay}
header={this.state.header}

/>
     
      

         
     
    );
  }
}
export default App;
