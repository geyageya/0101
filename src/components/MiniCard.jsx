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
        className  ="max-w-[50px] max-h-[50px] object-contain scale-down "
        alt="miniCard" 
        // style={miniCard}  
        src={props.src} 
      />
    )
  });