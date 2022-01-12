import {memo} from "react";

/* ミニ絵札*/
export const MiniCard =memo((props) => {
    console.log("Child3 MiniCardレンダリング");
    
    return(
      <img 
        className  ="max-w-[40px] max-h-[40px] md:max-w-[50px] md:max-h-[50px] lg:max-w-[70px] lg:max-h-[70px] "
        alt="miniCard" 
        src={props.src} 
      />
    )
  });