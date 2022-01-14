import {useState, useEffect, useRef} from 'react'

export const Typewriter = (props) => {
  // const [text1, setText1] = useState("Hello World")

  console.log("Child1 Typewriterレンダリング");
//   const index1 = useRef(0);

//   const [currentText1, setCurrentText1] =useState("");

//  useEffect(() => {
//    index1.current = 0;
//    setCurrentText1("");
//  },[text1]);

//   useEffect (() => {
//     const timeoutId = setTimeout(() => {
//       setCurrentText1((value) => value + text1.charAt(index1.current));
//       index1.current += 1;
//     },100);
//     //アンマウント時の処理
//     return () => {
//       clearTimeout(timeoutId)
//     };
    
//   },[currentText1, text1]);

  return <p>{props.currentText1}</p>
  

};