import React from "react";
// import {memo} from "react";

export const Footer = () => {
  console.log("Footer - Parent");

  return (
    <p className="text-center">
      ©<a href="https://ondoku3.com/">ondoku3.com</a>
      (声:
      <a href="https://ondoku3.com/">音読さん)</a>
    </p>
  );
};
