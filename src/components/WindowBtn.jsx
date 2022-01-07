import {memo} from "react";

export const WindowBtn =memo((props) =>{
    console.log("Child3 WindowBtn レンダリング");
    const windowBtn ={
      // display:"block",
      // background: "#3498db",
      // padding: "8px",
      // borderRradius: "4px",
      // textAalign: "center",
      // color: "#fff",
      // boxShadow: "0 4px 0 #287fb9",
      // width: "150px",
      // margin:"5px auto",
      cursor: "pointer",
    }
    return(
      <div>
        <button 
          class ="w-32 my-5 py-4 rounded-md   bg-sky-500 text-white cursor-pointer...  hover:bg-sky-700 ... "
          // style = {windowBtn} 
          onClick={props.onClick}
        >
          {props.windowBtnMsg}
        </button>
      </div>
    )
  });