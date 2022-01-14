export const RadioBtn =(props) => {
  console.log("RadioBtn レンダリング");
  return(
    <div
     className ="">
      <input 
        type="radio" 
        id={props.id}
        name={props.name} 
        value={props.value}
        onChange={props.onChange}
      />
      <label 
        htmlFor={props.htmlFor}
      >
        {props.text}
      </label>
    </div>
  )
}