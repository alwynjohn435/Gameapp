import React, { createContext, useState } from 'react'

import pic1 from '../assets/Images/pic1.jpg'
import pic2 from '../assets/Images/pic2.jpg'
import pic3 from '../assets/Images/pic3.jpg'
import pic4 from '../assets/Images/pic4.jpg'
import pic5 from '../assets/Images/pic5.jpg'
import pic6 from '../assets/Images/pic6.jpg'
import pic7 from '../assets/Images/pic7.jpg'
import pic8 from '../assets/Images/pic8.jpg'
import pic9 from '../assets/Images/pic9.jpg'
import pic11 from '../assets/Images/pic11.jpg'
import pic12 from '../assets/Images/pic12.jpg'
import pic13 from '../assets/Images/pic13.jpg'
import pic14 from '../assets/Images/pic14.jpg'
import pic15 from '../assets/Images/pic15.jpg'
import pic16 from '../assets/Images/pic16.jpg'
import pic17 from '../assets/Images/pic17.jpg'
import pic18 from '../assets/Images/pic18.jpg'
import pic19 from '../assets/Images/pic19.jpg'
import pic20 from '../assets/Images/pic20.jpg'
import pic21 from '../assets/Images/pic21.jpg'
import pic22 from '../assets/Images/pic22.jpg'
import pic23 from '../assets/Images/pic23.jpg'
import pic24 from '../assets/Images/pic24.jpg'
import pic25 from '../assets/Images/pic25.jpg'
export const  GameContext=createContext()
export default function GameContextProvider(props){

    
const[games]=useState([{id:1,pic1:pic1,title:"Action games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:2,pic1:pic2,title:"Action games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:3,pic1:pic3,title:"Action games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:4,pic1:pic4,title:"Action games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:5,pic1:pic5,title:"Action games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:6,pic1:pic6,title:"Action games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:7,pic1:pic7,title:"Tv Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:8,pic1:pic8,title:"Tv Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:9,pic1:pic9,title:"Tv Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:11,pic1:pic11,title:"Tv Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:12,pic1:pic12,title:"Tv Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:13,pic1:pic13,title:"Tv Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:14,pic1:pic14,title:"PC Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:15,pic1:pic15,title:"PC Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:16,pic1:pic16,title:"PC Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:17,pic1:pic17,title:"PC Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:18,pic1:pic18,title:"PC Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:19,pic1:pic19,title:"PC Games",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:20,pic1:pic20,title:"Games for kids",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:21,pic1:pic21,title:"Games for kids",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:22,pic1:pic22,title:"Games for kids",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:23,pic1:pic23,title:"Games for kids",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:24,pic1:pic24,title:"Games for kids",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}
,{id:25,pic1:pic25,title:"Games for kids",description:"A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements."}])
 
return( 
    <>

<GameContext.Provider  value={{games:[...games]}}>



{props.children}
</GameContext.Provider>

   </>
)
}



