import {memo} from "react";

export const Button =memo((props) =>{
    console.log("Child1 Buttonレンダリング");
    
    return(
      <button 
        className  = {`w-100 m-1 p-2 block mx-auto text-lg rounded-full shadow-lg ${props.tailwind}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    )
  });