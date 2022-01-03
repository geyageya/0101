export const RadioBtn =(props) => {
  return(
    <div>
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