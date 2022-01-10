import {memo} from "react";
import { WindowBtn } from "./WindowBtn";

export const Result = memo((props)=>{
    console.log("Child2 resultレンダリング");
    /* 画面枠（試合結果） */
    const resultWindow ={
      // width: "200px",
      // background: "#fff",
      // padding: "20px",
      // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      // margin: "0 auto",
      // borderRadius: "4px",
      // textAlign: "center",
      /* 画面の位置設定（基点は親要素のshowEfuda) */
      // position: "absolute",
      // top: "400px",
      // left: "0px",
      // right: "0",
    }
    /*スコア通知（試合結果）*/
    // const resultScore = {
    //   fontSize: "24px",
    // }
    /*メッセージ（試合結果）*/
    //   const resultMsg = {
    //   fontSize: "24px",
    // }
    /*画像（試合結果画面）*/
    // const resultImg = {
    //   maxWidth: "200px",
    //   maxHeight: "200px",
    // }
  
    return(
      <div>
      {/* 本番用 */}
        <div 
          className  = "absolute top-[200px] w-[200px] left-0 right-0 mx-auto max-w-xs p-5 border-2  rounded-md text-center bg-gray-100"
        // style={resultWindow}
        > 
          <p 
            className = "my-3 text-xl"
            // style={resultScore}
            >
            {props.score}枚取りました。
          </p>
  
          {props.score >= props.basicLists.length * 0.5 ? (
            <> 
              <p 
              className = "text-xl"
                // style={resultMsg}
                >
                勝ちました！
              </p>
              <img 
                className = "w-48 mx-auto my-5"
                alt ="prize" 
                // style={resultImg} 
                src="../images/gold.png" />
            </>
            ):(
              <p 
              className = "text-xl"
                // style={resultMsg}
              >
                残念！負けました
              </p>
            )
            }
            <WindowBtn 
              // className="mx-auto"
              onClick={props.onClick} 
              windowBtnMsg="もう一回？" 
            />
        </div>
  </div> 
    )
  });//<Result/>----------------------------------------------------------------
  
  