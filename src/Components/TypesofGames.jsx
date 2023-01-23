import React, { useContext } from "react";
import GameList from "./GameList";

import {GameContext}  from "./GameContext";


export default function TypesofGames(){

var {games}=useContext(GameContext)

return(

<>
<br/>
<h2 className="text-center mt-5 bg-secondary ">Types of games </h2>
<div className="container">
<div className="row text-center">

{
    games.map((item,index)=>{
        return <GameList
            image={item.pic1}
            title={item.title}
           description={item.description}
           key={index}
           
           
        />

    }



)



}
</div>



</div>







   







   


</>



)



}