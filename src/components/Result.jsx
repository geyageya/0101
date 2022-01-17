import {memo} from "react";
import { WindowBtn } from "./WindowBtn";

export const Result = (props)=>{
    console.log("Result - Child2");
    /* 画面枠（試合結果） */
  
    return(
      <div>
      {/* 本番用 */}
        <div 
          className  = "absolute top-[200px] w-[200px] left-0 right-0 mx-auto  p-5 border-2  rounded-md text-center bg-gray-100 shadow-md"
        > 

          {props.score > props.basicLists.length * 0.5 &&
            <> 
              <p 
              className = "text-lg md:text-xl"
                >
                勝ちました！
              </p>
              <img 
                className = "w-48 mx-auto my-5"
                alt ="prize" 
                src="../images/gold.png" />
            </>
            }
           {props.score === props.basicLists.length * 0.5 &&
            <p 
              className = "text-lg md:text-xl"
              >
                惜しい！同点です。
              </p>
            } 

            {props.score < props.basicLists.length * 0.5 &&
              <p 
              className = "text-lg md:text-xl"
              >
                残念！負けました
              </p>
      
            }

            <p 
            className = "my-3 text-base"
            >
            {props.score}枚取りました。
          </p>
            <WindowBtn 
              onClick={props.onClick} 
              windowBtnMsg="もう一回？" 
            />
        </div>
  </div> 
    )
  };//<Result/>----------------------------------------------------------------
  
  