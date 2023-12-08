import React from "react";

export default function Container(){
    return(
     <div className='Container'>
       <div className='Welcome'>
       <h1>Witamy Na Stronie</h1>
       </div>
 
       <ul>
         <li>Element 1</li>
         <li>Element 2</li>
         <li>Element {1 + 2}</li>
       </ul>
     </div>
    )
 }