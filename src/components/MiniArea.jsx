import { MiniCard } from "./MiniCard";

export const MiniArea =(props) => {
    console.log("Child2 MiniArea レンダリング");
    const miniArea ={
      // position: "absolute",
      // top: props.top,
      // bottom: props.bottom,
      // left: props.left,
      // listStyle: "none",
      /* ミニ絵札（手前）をflexで配置 */
      // display: "flex",
      // flexWrap: "wrap",
      // justifyContent: "left",
      // gap: "2px",
    }
  
    return(
      <ul 
        className ={`absolute mx-auto left-0 right-0 w-[350px] px-1 flex flex-wrap justify-center gap-1 ${props.tailwind} md:w-[750px] lg:w-[1000px]`}
      
      // style={miniArea}
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