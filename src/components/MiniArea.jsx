import { MiniCard } from "./MiniCard";

export const MiniArea =(props) => {
    console.log("Child2 MiniArea レンダリング");
   
    return(
      <ul 
        className ={`absolute mx-auto left-0 right-0 w-[350px] px-1 flex flex-wrap justify-center gap-1 ${props.tailwind} md:w-[750px] lg:w-[1000px]`}
      >
        {props.miniArray.map(picture =>{
        return(
          <li key={picture}>
            <MiniCard src={picture} />
          </li>
        )
        })}
      </ul>
    )
  };