import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';
const Header=(props)=>{
    return(
        <div className="header">

        
            <Carousel  indicators={false}>
            {props.header.map(i=>{

                return (
              <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={i.imgSrc}
                   alt="First slide"
                  />
                   <Carousel.Caption>
                          <h3>{i.title}</h3>
                        <p>{i.subTitle}</p>
                   </Carousel.Caption>
                </Carousel.Item>
                 )
                })}
              </Carousel>
             
      
        </div>
    )
}

export default Header;