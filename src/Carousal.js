import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pangolin from "./images/pangolin.png";
import bats from "./images/bats.png";
import wetmarket from "./images/wetmarket.png";
export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay width="80%">
                <div>
                <img  src={pangolin} width="90%" height="30%" alt="COVID-19" />
                </div>
                <div>
                <img  src={bats} width="90%" height="30%" alt="COVID-19" />
                     
                </div>
                <div>
                <img  src={wetmarket} width="90%" height="30%" alt="COVID-19" />
                </div>
            </Carousel>
        </div>
    );
}