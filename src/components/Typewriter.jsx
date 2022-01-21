import {useState, useEffect, useRef} from 'react'

export const Typewriter = ({text}) => {

  console.log("Child1 Typewriterレンダリング");
  const index = useRef(0);

  const [currentText, setCurrentText] =useState("");

  //表示した読み句の初期化（消す）
  useEffect(() => {
    index.current = 0;
    setCurrentText("");
  },[text]);

  useEffect (() => {
    const timeoutId = setTimeout(() => {
      //一文字づつ増える文字列で、逐次currentTextを更新
      setCurrentText((value) => value + text.charAt(index.current));
      //表示文字の位置を一つづつずらす（これがないと最初の文字だけが繰り返し表示される）
      index.current += 1;
      //文字を表示する間隔を指定（SetTImeoutがないと全ての文字が同時に表示される。）
    },100);
    
    //アンマウント時の処理（タイマーストップ）
    return () => {
      clearTimeout(timeoutId)
    };
      
  },[currentText, text]);

  return(
    <div 
    >
      <div
        className="w-[370px] h-[50px] mx-auto pl-1 mb-1 border rounded-md border-sky-500 md:w-[500px] md:text-lg lg:w-[800px] lg:text-2xl  "
      >
        {/* タイプライター用 */}
        {currentText}
        {/* 一括表示用。上の関数は全て使用しない */}
        {/* {text}  */}
      </div>
      
    </div>
  )
};