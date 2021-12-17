import React from "react";
import "../CSS/Content.css";
import BgndImg from "../Images/BgndImg.jfif";
import Favorite from '@material-ui/icons/Favorite';
import clickme6 from '../Images/clickme6.jpg';
import heartimg4 from '../Images/heartimg4.jfif';
import heartgif2 from '../Images/heartgif2.gif';
function Content(){
    return(
      <div
      class="bg_image"
      style={{
        backgroundImage: 'url('+BgndImg+')',
        backgroundSize: "cover",
      }}
    >
      <h1 style={{fontFamily:"Brush Script MT", textAlign:"center", color:"black", fontSize:"100px"}}>Happiest Birthday<br/>dear<br/>Shrinidhi.<img height="7%" width="5%" src={heartimg4} alt="heart"/></h1>
      <div style={{textAlign:"center"}}>
        <img height="20%" width="20%" src={clickme6} alt="heart"/>
      </div>
        <h1 style={{fontFamily:"Brush Script MT", color:"black", textAlign:"center", fontSize:"70px"}}>wishing you health, wealth, love, happiness and evrything your heart<br/>desires..<Favorite style={{'color': "red", height:"30px" ,width:"30px", marginTop:"0px"}}/></h1>
        
     </div>
     
    )
}

export default Content;