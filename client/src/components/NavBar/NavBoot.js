import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './NavBoot.css'
const Momo1= require('../../assets/1.jpg');
const Momo2= require('../../assets/2.jpg');
const Momo3= require('../../assets/4.jpg');


const isMobile = (window.innerWidth <= 700) ? true: false;
const mobileStyle= {
  height: 500,
  transform: "scaleY(0.9)"
};
const menuStyle = {
  width : "50% !important",
  left: "70 !important"
}
const styleImg = isMobile?mobileStyle:null;
const styleMenu = isMobile?menuStyle:null;
const NavBoot = (props) => {
  console.log(window.innerWidth, isMobile);
    return <div class="carousel">
      
      <Carousel showThumbs={false} infiniteLoop={true}  >
        <div>
            <img class="carousel-image" src={Momo1} style={styleImg}/>
            {/* <p className="legend">Veg Momos</p> */}
            <div class="menu legend" style={styleMenu}>
                <ul class="menu" style={styleMenu}>
                  <li>Veg Jumbo 	&#8377; 80 </li>
                  <li>Veg Large &#8377; 70</li>
                  <li>Veg Full &#8377; 45</li>
                </ul>
            </div>
          
        </div>
        <div>
            <img src={Momo2} style={styleImg} />
            {/* <p className="legend">Panner Momos</p> */}
            <div class="menu legend" style={styleMenu}>
                <ul class="menu" style={styleMenu}>
                  <li>Non-Veg Jumbo &#8377; 90</li>
                  <li>Non-Veg Large &#8377; 70</li>
                  <li>Non-Veg Full &#8377; 50</li>
                </ul>
            </div>
        </div>
        <div>
            <img src={Momo3} style={styleImg} />
            {/* <p className="legend">Non Veg Momos</p> */}
            <div class="menu legend" style={styleMenu}>
                <ul class="menu" style={styleMenu}>
                  <li>Panner Jumbo &#8377; 90</li>
                  <li>Panner Large &#8377; 80</li>
                  <li>Panner Full &#8377; 50</li>
                </ul>
            </div>
        </div>
    </Carousel>
 

    </div>
}

export default NavBoot;


