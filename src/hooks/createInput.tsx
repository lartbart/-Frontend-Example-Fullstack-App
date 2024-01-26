
type InputProps = {
    id: string;
    placeholder: string;
    type: string;
    value: string|undefined;
    setValue(value: string|any): void;
    submit(): void;
  }
  



export const CreateInput = ({id, placeholder, type, value, setValue, submit}: InputProps) => {

  return <input type={type} id={id} placeholder={placeholder} value={value} onChange={(e => setValue(e.target.value))} onKeyDown={(e) => e.key === 'Enter' && submit()}/>

}
