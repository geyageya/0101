import {memo} from "react";

export const Button =memo((props) =>{
    console.log("Child1 Buttonレンダリング");
    // const button ={
      // width: "100px",
      // padding: "8px",
      // borderRradius: "8px",
      // textAlign: "center",
      // color: "white",
      // marginLeft: "auto",
      // marginRight: "auto",
      // marginBottom: "20px",
      // display: "block",
      //Props用
      // background: props.background,
      // cursor: props.cursor,
    // }
    return(
      <button 
        className  = {`w-100 p-3 block mx-auto text-lg rounded-full shadow-lg ${props.tailwind}`}
        // style={button} 
        onClick={props.onClick}
      >
        {props.children}
      </button>
    )
  });