import React from "react"

import Navbar from "./Navbar"
import Home from './Home'
import Footer from "./Footer";


import { BrowserRouter,Routes,Route } from "react-router-dom"
import AboutGames from "./AboutGames"
import TypesofGames from "./TypesofGames"
import GameContextProvider from "./GameContext"
import Addtocart from "./Addtocart";





export default function App(){


    return(
    <>
<GameContextProvider>
   <BrowserRouter>

 <Navbar/>
 
 <Routes>

    <Route path="/" element={<Home title={"GameBlog"} name={"Games"} description={"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
      title1={"GameBlog"} name1={"Games in the part of our play"} description1={"Proper gaming website design is a part of the marketing strategy that you can use for promoting your video game. Your potential users make their first impression about the game through your website and decide if they will give it a try. Your existing players have a chance to find out about some juicy features that may not be initially apparent in the game. This will keep them engaged longer."}
    />}></Route>
    <Route path="/aboutus" element={<AboutGames/>}></Route>
 <Route path="/Game" element ={<TypesofGames/>}></Route>
 <Route path="/addtocart" element ={<Addtocart/>}></Route>
 </Routes>
 </BrowserRouter>

</GameContextProvider>
 <Footer/>
    </>
    
    
    
    )
    
    
    }
     
    