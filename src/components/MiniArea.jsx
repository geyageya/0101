import { MiniCard } from "./MiniCard";

export const MiniArea =(props) => {
    console.log("Child2 MiniArea レンダリング");
    const miniArea ={
      // position: "absolute",
      top: props.top,
      bottom: props.bottom,
      left: props.left,
      // listStyle: "none",
      /* ミニ絵札（手前）をflexで配置 */
      // display: "flex",
      // flexWrap: "wrap",
      // justifyContent: "left",
      // gap: "2px",
    }
  
    return(
      <ul 
        className ="absolute w-full px-1 left-1 list-none flex flex:wrap justify-start gap-1"
      
      style={miniArea}>
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