import { useState } from 'react';
import '../style.css'
import { useSignUp } from '../hooks/useSignUp';
import { CreateInput } from '../hooks/createInput';






function SignUp() {
  
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [EmailMessage, setEmailMessage] = useState('');
  const [password, setPassword] = useState(''); 
  const [PasswordMessage, setPasswordMessage] = useState('');
  const {mutate, isSuccess, isError} = useSignUp()
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  const userdata: UserRegister = {
    username,
    email,
    password
  }

  const verifyPassword = () => {
    setPasswordMessage("");
    if (password.length < 5) {
      setPasswordMessage("The password needs to have at least 5 characters")

    }

  }

  const verifyEmail = () => {
    setEmailMessage("");
    if (!emailRegex.test(email)) {
      setEmailMessage("The email is invalid")

    }
  }


  const Submit = () => {

    if (!isButtonDisabled) {
      setIsButtonDisabled(true)
        


      if (emailRegex.test(email) && password.length >= 5) {
          mutate(userdata)


      }
      else {
        verifyEmail();
        verifyPassword()
      }

      setTimeout(() => {
        setIsButtonDisabled(false)
      }, 2000)
      
    }
  }


  const Verifyifsuccess = () => {
    if (isError) {
      setPasswordMessage("The user is already registered")
    }
    if(isSuccess) {
      return <>Success</>
    }
    else {
      return <>Sign Up</>}
    
  }

  return <div className="container">
  <div className="form-container">

      <h1 className="header"><b>Sign Up</b></h1>

      <CreateInput id="text-input" placeholder="Username" type="text" value={username} setValue={setUsername} submit={() => Submit()}/>

      <CreateInput id="text-input" placeholder="Email" type="email" value={email} setValue={setEmail} submit={() => Submit()}/>
      <h2>{EmailMessage}</h2>

      <CreateInput id="text-input" placeholder="Password" type="password" value={password} setValue={setPassword} submit={() => Submit()}/>
      <h2>{PasswordMessage}</h2>


      <button id="button" onClick={() => Submit()} onKeyDown={(e) => e.key === 'Enter' && Submit()}> {<Verifyifsuccess/>} </button>

      <h2>Already have an account? <a href="/login">Login!</a></h2>
  </div>
  </div>;
}


export default SignUp;

