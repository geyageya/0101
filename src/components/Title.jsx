
export const Title=(props)=>{
    console.log("Child 2 Titleレンダリング");
    
    return(
      <h1 
        className ="p-1 bg-red-200 text-2xl text-center md:w-[768px] md:p-3  md:bg-amber-300 lg:container lg:w-[1024px] lg:bg-lime-300 lg:text-3xl xl:container xl:w-[1280px] xl:bg-sky-500"
      >
        {props.children}
      </h1>
    )
  };

 