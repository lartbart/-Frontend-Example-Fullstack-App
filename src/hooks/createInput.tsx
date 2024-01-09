
type InputProps = {
    id: string;
    placeholder: string;
    type: string;
    value: string|undefined;
    setValue(value: string|any): void;
  }
  



export const CreateInput = ({id, placeholder, type, value, setValue}: InputProps) => {

  return <input type={type} id={id} placeholder={placeholder} value={value} onChange={(e => setValue(e.target.value))}/>

}
