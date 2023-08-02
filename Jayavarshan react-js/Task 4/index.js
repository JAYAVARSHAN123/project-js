import React from "react";
import ReactDOM from "react-dom";
// // import "./index.css";
// import App from "./App";
// // import Inlineexample from "./App";
// import Reactstyle from "./App";
import styles from './Demo.Module.css'
import img1 from './red.jpg'
import img2 from './sam.jpg'
import './Style.css'

class Reactstyle extends
React.Component{
  render(){
   
      const mystyle={
        color:"yellow",
        fontFamily:"Arial"
      }
      return(
      <div>
         <h2 style={mystyle}>WHOAH NOTHING BUT REACT</h2>
         <h2>hola</h2>
         <h3 class="App">ROCKING</h3>
         <p className="heading"> Nothing is a Good Front end Framework except REACT</p>
         <br></br>
         <img className="img1" src={img1} alt="logo" width={400} height={300}></img>
         <img className="img2" src={img2} alt="logo" width={400} height={300}></img>
      </div>)
  }
}


ReactDOM.render(<Reactstyle/>,
document.getElementById("root"));