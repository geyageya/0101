import {memo} from "react";

/* ミニ絵札*/
export const MiniCard =memo((props) => {
    console.log("Child3 MiniCardレンダリング");
    // const miniCard = {
    //   maxWidth: "50px",
    //   maxHeight: "40px",
    // }
    return(
      <img 
        className  ="max-w-[40px] max-h-[40px] md:max-w-[70px] md:max-h-[70px] "
        alt="miniCard" 
        // style={miniCard}  
        src={props.src} 
      />
    )
  });