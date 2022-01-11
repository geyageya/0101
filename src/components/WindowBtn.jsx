import {memo} from "react";

export const WindowBtn =memo((props) =>{
    console.log("Child3 WindowBtn レンダリング");
    
    return(
      <div>
        <button 
          className  ="w-35 p-2 my-5 py-4 bg-sky-500 text-white rounded-md cursor-pointer    hover:bg-sky-600 transform hover:scale-110 transition-transform"
          onClick={props.onClick}
        >
          {props.windowBtnMsg}
        </button>
      </div>
    )
  });