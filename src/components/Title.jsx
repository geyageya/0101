
export const Title=(props)=>{
    console.log("Child 2 Titleレンダリング");
    // const title= {
    //   color: "#979797",
    // }
    return(
      <h1 
        class="my-5 p-5  text-center text-3xl md:text-4xl  text-gray-500 md:text-black font-bold"
        // style={title}
      >
        {props.children}
      </h1>
    )
  };

 