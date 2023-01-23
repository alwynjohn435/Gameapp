import React from "react";
import {Link} from "react-router-dom";
import '../mystylegame.css';
export default function Navbar(){


return(

<>
<nav className="navbar navbar-expand-lg bg-primary text-center fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand " to="#">GameSite</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="Nav-item active">
          <Link className="Link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="Nav-item active ">
          <Link className="Link active" to="/aboutus">AboutGames</Link>
        </li>
        
        <li className="Nav-item active">
          <Link className="Link active" to="/Game">Types of Games </Link>
        </li>
        <li className="Nav-item active">
          <Link className="Link active" to="/addtocart">Add to cart </Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>


</>


)




}