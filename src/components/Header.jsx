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
        <header className = " mx-auto border bg-orange-300 md:container md:mx-auto md:bg-amber-300 lg:container lg:bg-lime-300 xl:container xl:bg-sky-500"    >
          <Title>
            世界200ヶ国かるた!
          </Title>
        </header>
    )
  };