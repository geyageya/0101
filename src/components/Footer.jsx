import {memo} from "react";

export const Footer = memo((props) => {
  console.log("Footer レンダリング");
   
  return(
  
    <p 
      className ="text-center"
      >
      ©
      <a href="https://ondoku3.com/">
        ondoku3.com
      </a>
        (声:
      <a href="https://ondoku3.com/">
        音読さん)
      </a>
    </p>
  )
  });

  