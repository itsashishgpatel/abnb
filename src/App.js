import airbnb from "./assets/1.jpg"
import amazon from "./assets/2.png"
import './App.css';
import Info from "./Components/index"
import React from "react";
class App extends React.Component {

  render(){

    return (
      <div>
       <div className="container" >
         <div className="row"  style={{marginTop:25 }} >
           <div className="col-md-12" style={{ textAlign:"center"  }} >
             <img  style={{ height: 100}} src={amazon }/>
             {/* <img  style={{ height: 100, paddingLeft:5}} src={airbnb}/> */}
           </div>
         </div>
         <div className="row" style={{marginTop:50, textAlign:"center"}}>
           <div className="col-md-12" style={{border:"5px solid black", marginBottom:25}}>
             <Info/>
             {/*  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                 <div class="container-fluid">
                   <a class="navbar-brand" href="javascript:void(0)"> Airbnb Search</a>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                     <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="mynavbar">
                     <ul class="navbar-nav me-auto">
                       <li class="nav-item">
                         <a class="nav-link" href="javascript:void(0)">Trash</a>
                       </li>
                     </ul>
                     <form class="d-flex">
                       <input class="form-control me-2" type="text" placeholder="Search"/>
                       <button class="btn btn-primary" type="button">Search</button>
                     </form>
                   </div>
                 </div>
             </nav>      
                */}
           </div>
         </div>
       </div>
      </div>
     )
  }
  
}

export default App;
