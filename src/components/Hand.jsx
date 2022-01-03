import {memo} from "react";

export const Hand =memo((props) =>{
    console.log("Child4 Handレンダリング");
    const hand = {
      width: "110px",
      height: "110px",
      objectFit: "scale-down", /*原画比率維持*/
      position: "absolute", /*これがないと画像が縦に並ぶ*/
    }
    return(
      <>
        {/* マジックコード */}
        {props.src === "" ? 
        null : 
        <img 
          style={hand} 
          alt =""
          src={props.src}  
          onError={e => e.target.style.display = 'none'} 
          /> 
        }
      </> 
    )
  });