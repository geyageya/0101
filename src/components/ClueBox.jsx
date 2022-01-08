// import {useState, useEffect,useRef, useCallback, memo} from "react";

export const ClueBox =(props) => {

    console.log("Child1 CluBoxレンダリング");
    const clueBox ={
      // width: "80%",
      // margin: "40px 3%",
    }
    return(
      <div 
        style={clueBox}
      >
        <input 
          className =" block w-250 mt-150 border mx-auto border-gray-300 rounded-md py-2 pl-9 shadow-sm"
          type="text"
          size="60"
          placeholder = "ここに読み句が表示されます"
          //props用
          defaultValue={props.placeholder}
        />
      </div>
    )
  };