// import {useState, useEffect,useRef, useCallback, memo} from "react";

export const ClueBox =(props) => {

    console.log("Child1 CluBoxレンダリング");
    const clueBox ={
      margin: "40px 3%",
    }
    return(
      <div 
        style={clueBox}
      >
        <input 
          className =" block w-100  border mx-auto border-gray-300 rounded-md mt-5 py-2 pl-4 shadow-sm"
          type="text"
          size="30"
          placeholder = "ここに読み句が表示されます"
          //props用
          defaultValue={props.placeholder}
        />
      </div>
    )
  };