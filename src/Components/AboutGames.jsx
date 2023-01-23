import React from "react";
import p8 from '../assets/Images/p8.jpg'
import p11 from '../assets/Images/p11.jpg'
import p12 from '../assets/Images/p12.jpg'
import p10 from '../assets/Images/p10.jpg'
export default function AboutGames(){


return(

<>
<br/>
<h2 className="text-center mt-5 bg-secondary">About Games</h2>
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-6 p-5">
      <img src={p8} width={"500px"} className="img-fluid"/>

    </div>
    <div className="col-sm-6 p-5">
   <h3 className="fw-light">Every year, the video game industry produces hundreds of upgraded games with a satisfying and pleasurable user experience through good user interfaces and design practices. 

Game websites are created and upgraded as well, as this is the main medium used to advertise and showcase games themselves. An appealing design helps potential players to understand the game better and engage in it faster.

In this article, we will outline the importance of a great gaming website design, show awesome examples, and give tips on how to design your own website. The article is based on Agente’s experience designing and building outstanding game websites.</h3>
    </div>
    
  </div>
</div>

<hr/>


<div className="container mt-4">
  <div className="row">
    <div className="col-sm-6 p-5">
  <h3 className="fw-light">  First of all, you need to identify your target audience. Blasting everyone everywhere with ads is not effective. It’s better to hit 10,000 people who are all excited by the video game, instead of 100,000 where only 2,000 will be interested. 

After that, the goals and objectives should be determined. In short, the purpose of a website needs to be considered by all stakeholders. This might sound obvious, but it is so often neglected. After you have answered all these questions, you can easily choose the format of the website.</h3>
    </div>
    <div className="col-sm-6 p-5">
      <img src={p11} className="img-fluid"/>
    </div>
  </div>
</div>


<hr/>
<div className="container mt-4">
  <div className="row">
    <div className="col-sm-6 p-5">
    <img src={p12} className="img-fluid"/>
   
    </div>
    <div className="col-sm-6 p-5">
    <h3 className="fw-light">In the German language a game is any activity which is executed only for pleasure and without conscious purpose. In this definition every activity that brings pleasure is a game. For example, people dance, play musical instruments, act in plays, and play with dolls and model trains.</h3>
    </div>
    
  </div>
</div>


<div className="container mt-4">
  <div className="row">
    <div className="col-sm-6 p-5">
  <h3 className="fw-light">  First of all, you need to identify your target audience. Blasting everyone everywhere with ads is not effective. It’s better to hit 10,000 people who are all excited by the video game, instead of 100,000 where only 2,000 will be interested. 

After that, the goals and objectives should be determined. In short, the purpose of a website needs to be considered by all stakeholders. This might sound obvious, but it is so often neglected. After you have answered all these questions, you can easily choose the format of the website.</h3>
    </div>
    <div className="col-sm-6 p-5">
      <img src={p10} className="img-fluid"/>
    </div>
  </div>
</div>


</>




)




}