import React from "react";
import {memo} from "react";

//memo効果：36回⇨1回（札数6枚の場合）
export const Hand =memo((props) =>{
    console.log("Hand - Child");
    
    return(
      <>
        {/* マジックコード */}
        {props.src === "" ? 
        null 
        : 
        <img 
          className ="absolute w-[110px] h-[110px]"
          alt =""
          src={props.src}  
          onError={e => e.target.style.display = 'none'} 
          /> 
        }
      </> 
    )
  });