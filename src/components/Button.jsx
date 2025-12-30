import React from "react";
import { memo } from "react";



//memo化の効果あり。memo化しないと札を取る度に、数回不要なレンダリングされる
// export const Button = memo((props) => {
//    console.log("Button props.tailwind =", props.tailwind);
  

//   return (
//     <button
//       className={`w-100 m-1 p-2 block mx-auto text-lg rounded-full shadow-lg ${props.tailwind}`}
//       onClick={props.onClick}
//     >
//       {props.children}
//     </button>
//   );
// });
// import { memo } from "react";

export const Button = memo((props) => {
  return (
    <button
      className={`w-fit m-1 p-2 block mx-auto text-lg rounded-full shadow-lg ${props.tailwind ?? ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
});
