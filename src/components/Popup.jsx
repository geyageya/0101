import {memo} from "react";
import { WindowBtn } from "./WindowBtn";

export const Popup = memo((props) => {
    console.log("Child2 Popup レンダリング");
    const popupWindow ={
      /* Box枠の設定 */
      // width: "200px",
      // background: "#fff",
      // padding: "30px",
      // boxSshadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      // border:"solid",
      // borderRradius: "4px",
      // margin: "0 auto", /* 画面を中央に配置 */
      // textAlign: "center",/* 画面内要素を中央に */
      // transition: "0.001s",
      /* 画面の位置設定（基点は親要素のshowEfuda) */
      // position: "absolute",
      // top: "-100px",
      left: "0px",
      right: "0",
      // right: "0",
    }
    /*メッセージ（ポップアップ）*/
    // const popupMsg ={
    //   // fontSize:"18px"
    // }
    /*画像（ポップアップ画面）*/
    // const popupImg = {
    //   maxWidth: "150px",
    //   maxHeight: "150px",
    // }
    
    return(
      <div 
      className = "absolute top-[250px] left-0 right-0 mx-auto max-w-xs p-5 border-2 rounded-md text-center bg-gray-100"
      // style={popupWindow}
      > 
        <p 
        className = "text-lg"
        // style={popupMsg}
        >
          {props.popupMsg}
        </p>
     
      <img 
        className ="max-w-[150px] mx-auto"
        alt="efuda" 
        // style={popupImg} 
        src={props.basicLists[props.currentTurn].answer} 
      />
      <p>
        {/* {props.basicLists[props.currentTurn].subject}  */}
        {/* 日本語 */}
        {props.basicLists[props.currentTurn].daizai}  
      </p> 
      <p>
        {/* {props.basicLists[props.currentTurn].country}  */}
        {/* 日本語 */}
        {props.basicLists[props.currentTurn].kuni} 
      </p> 
      <img 
        className ="mx-auto"
        alt ="flag" 
        src={props.basicLists[props.currentTurn].flag} 
      />  
      
      {props.currentTurn<props.basicLists.length-3 &&
        <WindowBtn 
          onClick={props.onClick} 
          windowBtnMsg="次" 
        />
      } 
      {props.currentTurn===props.basicLists.length-3 &&
        <WindowBtn 
          onClick={props.onClick}  
          windowBtnMsg="次に取ると、最後の札ももらえます" 
        />
      }
      {props.currentTurn===props.basicLists.length-2 &&
        <WindowBtn 
          onClick={props.onClick} 
          windowBtnMsg="結果を見る" 
        />
      } 
      </div>
    )
  }); //<Popup/>---------------------------------------------------------
  