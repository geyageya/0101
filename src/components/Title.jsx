
export const Title=(props)=>{
    console.log("Child 2 Titleレンダリング");
    // const title= {
    //   color: "#979797",
    // }
    return(
      <h1 
        className ="p-1 text-2xl text-center md:p-3 lg:text-3xl bg-orange-300 md:container md:bg-amber-300 lg:container lg:bg-lime-300 xl:container xl:bg-sky-500"
        
        // style={title}
      >
        {props.children}
      </h1>
    )
  };

 