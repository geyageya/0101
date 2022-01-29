import React from "react";
// import {useState, useEffect, useRef} from 'react'
import { useWindupString } from "windups";

//windupsライブラリーを使う場合
export const ClueBox = ({ text }) => {
  const [currentText] = useWindupString(text, {
    pace: (char) => (char === " " ? 80 : 80), //英語
    // pace: (char) => (char === " " ? 200 : 200),  //日本語
    onFinished: () => {
      text = "";
    },
  });

  return (
    <>
      <div className="w-[370px] h-[50px] mx-auto pl-1 mb-1 border rounded-md border-sky-500 md:w-[500px] md:text-lg lg:w-[800px] lg:text-2xl  ">
        {currentText}
      </div>
    </>
  );
};

//
//   switch (language){
//     case "english":
//       pace: (char) => (char === " " ? 80 : 80),  //英語
//       break
//     case "japanese":
//       pace: (char) => (char === " " ? 200 : 200),  //日本語
//       break
//     case "hiragana":
//       pace: (char) => (char === " " ? 200 : 200),  //日本語
//       break
//     default:
//       pace: (char) => (char === " " ? 80 : 80),  //英語
//   }

//ライブラリーを使わない場合
// export const ClueBox = ({text}) => {

//   console.log("ClueBox");
//   const index = useRef(0);

//   const [currentText, setCurrentText] =useState("");

//   //表示した読み句の初期化（消す）
//   useEffect(() => {
//     index.current = 0;
//     setCurrentText("");
//   },[text]);

//   useEffect (() => {
//     const timeoutId = setTimeout(() => {
//       //一文字づつ増える文字列で、逐次currentTextを更新
//       setCurrentText((value) => value + text.charAt(index.current));
//       //表示文字の位置を一つづつずらす（これがないと最初の文字だけが繰り返し表示される）
//       index.current += 1;
//       //文字を表示する間隔を指定（SetTImeoutがないと全ての文字が同時に表示される。）
//     },100);

//     //アンマウント時の処理（タイマーストップ）
//     return () => {
//       clearTimeout(timeoutId)
//     };

//   },[currentText, text]);

//   return(
//     <div
//     >
//       <div
//         className="w-[370px] h-[50px] mx-auto pl-1 mb-1 border rounded-md border-sky-500 md:w-[500px] md:text-lg lg:w-[800px] lg:text-2xl  "
//       >
//         {/* タイプライター用 */}
//         {currentText}
//         {/* 一括表示用。上の関数は全て使用しない */}
//         {/* {text}  */}
//       </div>

//     </div>
//   )
// };
