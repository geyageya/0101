import { Title } from "./Title";

export const Header=(props)=>{
    console.log("Child1 Headerレンダリング");
  
    const header ={
      // maxWidth: "900px",
      // height:"auto",
      // margin: "0px auto 0",
      // background: "#fff",
      // borderRadius: "4px",
      // padding: "0px",
      // textAlign: "center",
      // fontSize: "14px",
      // fontFamily: "Verdana, sans-serif",
      // position: "relative",
  }
    return(
        <header className = " mx-auto  border bg-green-500laptop:container bg-emerald-400 laptop:bg-red-500"    >
          <Title>
            世界200ヶ国かるた!
          </Title>
        </header>
    )
  };