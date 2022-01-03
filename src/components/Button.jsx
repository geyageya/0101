import {memo} from "react";

export const Button =memo((props) =>{
    console.log("Child1 Buttonレンダリング");
    const button ={
      width: "100px",
      padding: "8px",
      borderRradius: "8px",
      textAlign: "center",
      color: "white",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "20px",
      display: "block",
      //Props用
      background: props.background,
      cursor: props.cursor,
    }
    return(
      <button 
        style={button} 
        onClick={props.onClick}
      >
        {props.children}
      </button>
    )
  });