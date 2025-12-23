import React from "react";
import { memo } from "react";
import { resolveAsset } from "../utils/assetResolver";

//memo効果：36回⇨1回（札数6枚の場合）


// export const Hand = memo((props) => {
//   console.log("Hand - Child");

  

//   return (
//     <>
//       {/* マジックコード */}
//       {props.src === "" ? null : (
//         <img
//           className="absolute w-[110px] h-[110px]"
//           alt=""
//           src={props.src}
//           onError={(e) => (e.target.style.display = "none")}
//         />
//       )}
//     </>
//   );
// });

export const Hand = memo((props) => {
  console.log("Hand src:", props.src);

  if (!props.src) return null;

  return (
    <img
      // className="absolute w-[110px] h-[110px]"
      // alt=""
      // src={props.src}
      className="absolute top-0 left-0 w-[110px] h-[110px] pointer-events-none"
      src={resolveAsset(props.src)}
      alt=""
      onError={(e) => (e.target.style.display = "none")}
    />
  );
});
