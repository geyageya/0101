// import {useState, useEffect,useRef} from "react";
// import { useSetup } from "../hooks/useSetup";

export const ClueBox =(props) => {

  // const {currentTurn, basicLists, language, isStarted} = useSetup();

    console.log("Child1 CluBoxレンダリング");

  //   const [text, setText] =useState(""); //表示文字の原稿  
  // const [currentText, setCurrentText] = useState('');        
  //  const index = useRef(0);
 
  //     //indexは文字列の何文字目かを示す値
  //     //前の表示文字を消す  困ったことあれば、[]にtextを入れてみる
  //     useEffect(() => {
  //       index.current = 0;
  //       setCurrentText(""); //(clue関数とhide関数の両方で設定した方がいいみたい）
  //     },[]);
     
  //     useEffect(() => {
  //          if(currentTurn < basicLists.length-1){
  //           let text ="";
  //           switch (language){
  //             case "japanese":
  //               text = basicLists[currentTurn].yomiku //日本語
  //               break
  //             case "english":
  //               text = basicLists[currentTurn].clue //英語
  //               break
  //             default:
  //               text= basicLists[currentTurn].clue //英語
  //           }
  //           const timeoutId = setTimeout(()=>{
  //             setCurrentText ((prev) => prev + text.charAt(index.current));
  //             index.current +=1;
  //             } , 100);
  //             //アンマウント時の処理
  //           return () => {
  //             clearTimeout(timeoutId);
  //         };
  //       }
  //     }, [currentText, isStarted]);  
  //       //isStartedを記入しないと、最初の句が表示されない
    
    return(
      <div 
      >
        <div
          className="w-[350px] mx-auto p-2 border rounded-md border-sky-500 md:w-[500px] lg:w-[800px]  "
        >
         読句： {props.currentText}
          {/* 読句：{props.text} */}
        </div>
        
      </div>
    )
  };