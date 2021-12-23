import add from "./calc";
import('./index.css');
import img from './file.png';

import React from "react";
import  ReactDom from "react-dom";
import react from "react";


console.log(add(3,5))
console.log(add(8,5))


ReactDom.render(
    React.createElement('h1' , {className :"heading"},
     [
        "Hello Webpack and ",
        React.createElement('i' , null , "React")
     ]
    ),
    document.getElementById("root")
);


ReactDom.render(
   <h1 className="heading">
       Hello Webpack and {' '}
       <i>Reack</i> 
    </h1>,
    document.getElementById("list")
);