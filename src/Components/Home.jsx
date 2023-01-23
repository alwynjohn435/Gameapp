import React from "react";
import Carousel from "./Carousel"



import p4 from "../assets/Images/p4.jpg"
import p5 from "../assets/Images/p5.jpg"
import p6 from "../assets/Images/p6.jpg"
import p7 from "../assets/Images/p7.jpg"
import p13 from "../assets/Images/p13.jpg"
import p14 from "../assets/Images/p14.jpg"
import p15 from '../assets/Images/p15.jpg'
import p16 from '../assets/Images/p16.jpg'


export default function Home(props){


return(

<>
<Carousel/>

<div className="container mt-4">
  <div className="row justify-content-center text-center">
    <div className="col-sm-6 p-5 ">
    <div className="card ">
  <img src={p4}  className="img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.name}</p>
    <a href="#" className="btn btn-primary">{props.description}</a>
  </div>
</div>
    </div>
    <div className="col-sm-6 p-5">
      <img src={p5}  className="img-fluid"/>
    </div>
    
  </div>
</div>


<hr/>

<div className="container mt-4">
  <div className="row justify-content-center text-center">

    <div className="col-sm-6 p-5">
    <img src={p6}   className="img-fluid"/>
    
    </div>
    <div className="col-sm-6 p-5">
    <div className="card ">
  <img src={p7} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title1}</h5>
    <p className="card-text">{props.name1}</p>
    <a href="#" className="btn btn-primary">{props.description1}</a>
  </div>
</div>
    </div>
    
  </div>
</div>


<div className="container mt-4">
  <div className="row justify-content-center text-center">
    <div className="col-sm-6 p-5 ">
    <div className="card ">
  <img src={p13} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.name}</p>
    <a href="#" className="btn btn-primary">{props.description}</a>
  </div>
</div>
    </div>
    <div className="col-sm-6 p-5">
      <img src={p14}   className="img-fluid"/>
    </div>
    
  </div>
</div>



<div className="container mt-4">
  <div className="row justify-content-center text-center">
    <div className="col-sm-6 p-5 ">
    <div className="card ">
  <img src={p15} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.name}</p>
    <a href="#" className="btn btn-primary">{props.description}</a>
  </div>
</div>
    </div>
    <div className="col-sm-6 p-5">
      <img src={p16}  className="img-fluid"/>
    </div>
    
  </div>
</div>












</>





)






}
