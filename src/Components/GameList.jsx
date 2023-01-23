import React from "react";
export default function GameList(props){

return(

<>


<div className="col-xxl-2 col-lg-3 col-lg-3 col-md-4 col-sm-6 col-12">
<div className="card mt-1" >
  <img src={props.image}  style={{height:"200px"}} className="img-fluid" alt="..."/>
  
 <div className="card-body" >
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description.slice(0,70)+"..."}</p>
 
  </div>
</div>

</div>





</>
)


}