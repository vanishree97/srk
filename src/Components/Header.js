import React from "react";
//import "../CSS/Content.css";
import bdy from '../Images/bdy.jfif';
import Favorite from '@material-ui/icons/Favorite';
import clickme5 from '../Images/clickme5.jfif';
import clickme1 from '../Images/clickme1.jfif';
import clickme2 from '../Images/clickme2.jfif';
import heartgif from '../Images/heartgif.gif';
//import Favorite from '@material-ui/icons/Favorite';
import "../CSS/Header.css";
function Header(){
    return(
      <div
      class="bg_image"
      style={{
        backgroundImage: 'url('+bdy+')',
        backgroundSize: "cover",
      }}
    >
  {/* <div className="card" style={{width:"18rem"}}>
  <img className="card-img-top" src={clickme6} alt="Card image cap"/>
</div> */}

     <div className="container-fluid">
         <div className="row">
             <div className="col-sm-3 col-md-2">
             <img className="card-img-top" src={clickme2} alt="Card image cap"/>
             </div>
             
             <div className="col-sm-3 col-md-2">
             <img className="card-img-top" src={clickme5} alt="Card image cap"/>
             </div>

             <div className="col-sm-3 col-md-2">
             <img className="card-img-top" src={clickme5} alt="Card image cap"/>
             </div>

             <div className="col-sm-3 col-md-2">
             <img className="card-img-top" src={clickme5} alt="Card image cap"/>
             </div>

             <div className="col-sm-3 col-md-2">
             <img className="card-img-top" src={clickme5} alt="Card image cap"/>
             </div>

             <div className="col-sm-3 col-md-2">
             <img className="card-img-top" src={clickme2} alt="Card image cap"/>
             </div>
            
         </div>
         <h1 style={{fontFamily:"Brush Script MT"}}>I wish you success and growth in <span>{ }</span>every.. step of your way And </h1><h1 style={{fontFamily:"Brush Script MT"}}>always fly high in life and touch all<br/> your dreams.<Favorite style={{'color': "red", height:"30px" ,width:"30px", marginTop:"0px"}}/></h1>
         <div className="row">
             <div className="col-sm-1 col-md-2">
                 <div>
                   {/* <h2 className="name">Shrinidhi.<Favorite style={{'color': "red", height:"30px" ,width:"30px",marginTop:"1px", marginLeft:"320px"}}/></h2> */}
                 </div>
                 {/* <img src={heartgif} alt="image" height="300px" width="300px"/> */}
             </div>

             <div className="col-sm-1 col-md-2">
               <div className="box">
                   <div className="card text-white">
                       <img className="card-img" src={clickme5} alt="Card image"/>
                   <div classNameass="card-img-overlay">
                       <p className="card-text" style={{color:"black", fontSize:"20px",fontFamily:"Brush Script MT"}}>I wish that your overall graph of growth always moves higher with time and you get evrey happiness.. that your heart<Favorite style={{'color': "red", height:"30px" ,width:"30px", marginTop:"0px"}}/>can hold.</p>
                   </div>
                </div>
              </div>
             </div>
         </div>
         

     </div>
      
     </div>
     
    )
}

export default Header;
