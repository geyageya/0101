import {memo} from "react";

/* ミニ絵札*/
export const MiniCard =memo((props) => {
    console.log("Child3 MiniCardレンダリング");
    
    return(
      <img 
        className  ="max-w-[40px] max-h-[40px] md:max-w-[70px] md:max-h-[70px] "
        alt="miniCard" 
        src={props.src} 
      />
    )
  });