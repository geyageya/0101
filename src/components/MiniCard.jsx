import {memo} from "react";

/* ミニ絵札*/
export const MiniCard =memo((props) => {
    console.log("Child3 MiniCardレンダリング");
    const miniCard = {
      maxWidth: "50px",
      maxHeight: "40px",
    }
    return(
      <img 
        alt="miniCard" 
        style={miniCard}  
        src={props.src} 
      />
    )
  });