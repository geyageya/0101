import {memo} from "react";

export const Hand =memo((props) =>{
    console.log("Child4 Handレンダリング");
    
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