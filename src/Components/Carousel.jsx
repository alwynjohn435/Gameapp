import React from "react";
import p1 from '../assets/Images/p1.jpg'
import car1 from '../assets/Images/car1.png'
import car2 from '../assets/Images/car2.png'
import '../mystylegame.css'
export default function Carousel(){


return(
<>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src={p1} className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={car1} className="d-block w-100 img-fluid"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car2}   className="d-block w-100 img-fluid "  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>





</>



)




}