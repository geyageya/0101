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
        <header className = "laptop:container mx-auto my-5 border bg-green-500 laptop:bg-red-500"   >
          <Title>
            かるたで学ぼう、世界200ヶ国!
          </Title>
        </header>
    )
  };