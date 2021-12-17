import React from "react";
import { Menulist } from "./Menulist";
import  "../CSS/Navbar.css";
import {NavLink} from "react-router-dom";
import clickme3 from "../Images/clickme3.jfif";
import clickme2 from "../Images/clickme2.jfif";
function Navbar  () {  
    
    const menulist = Menulist.map((data,index)=>{
        return(
            
               <li key={index}>
                   <a href={data.url}>{data.title}</a>
               </li>
           
        );
       
    })
  return (
      <nav>  
          {/* <div style={{color:"tomato", fontWeight:600, fontSize:"25px", marginLeft:"0px" }}>
              Dominozz<font style={{color:"white"}}>Pizza</font> */}

            <div>
              <img src={clickme2} alt="imagae" height="105px" width="105px"/>
            </div>  

            <div style={{textalign:"center"}}>
                <ul className="menu-list"> {menulist}</ul> 
            </div>
  
            <div>
              <img src={clickme2} alt="imagae" height="105px" width="105px"/>
            </div>               
      </nav>
    
  );
}

 export default Navbar;