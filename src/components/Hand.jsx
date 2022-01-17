import {memo} from "react";

//memo化の効果大。memo化しないと札を取る度に絵札の数x2回レンダリングされる
export const Hand =memo((props) =>{
    console.log("Hand - Child4");
    
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