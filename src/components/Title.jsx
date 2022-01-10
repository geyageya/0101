
export const Title=(props)=>{
    console.log("Child 2 Titleレンダリング");
    // const title= {
    //   color: "#979797",
    // }
    return(
      <h1 
        className ="p-1 text-2xl text-center laptop:p-5 laptop:text-5xl"
        // style={title}
      >
        {props.children}
      </h1>
    )
  };

 