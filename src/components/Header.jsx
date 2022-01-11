import { Title } from "./Title";

export const Header=(props)=>{
    console.log("Child1 Headerレンダリング");
  
    return(
        <header className = " mx-auto border bg-orange-300 md:container md:mx-auto md:bg-amber-300 lg:container lg:bg-lime-300 xl:container xl:bg-sky-500"    >
          <Title>
            世界200ヶ国かるた!
          </Title>
        </header>
    )
  };