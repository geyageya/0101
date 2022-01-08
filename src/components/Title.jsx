
export const Title=(props)=>{
    console.log("Child 2 Titleレンダリング");
    // const title= {
    //   color: "#979797",
    // }
    return(
      <h1 
        className ="p-5  text-center text-2xl sm:text-3xl  md:text-4xl lg:text-5xl text-gray-500"
        // style={title}
      >
        {props.children}
      </h1>
    )
  };

 