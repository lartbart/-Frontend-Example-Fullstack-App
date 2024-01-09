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
  const {mutate, isSuccess} = useSignUp()
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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
    const userdata: UserRegister = {
      username,
      email,
      password
    }


    if (emailRegex.test(email) && password.length > 5) {
      mutate(userdata)

    }
    else {
      verifyEmail();
      verifyPassword()
    }
  }


  const Verifyifsuccess = () => {
    if(isSuccess) {
      return <>Success</>
    }
    else {
      return <>Sign Up</>}
  }

  return <div className="container">
  <div className="form-container">

      <h1 className="header"><b>Sign Up</b></h1>

      <CreateInput id="text-input" placeholder="Username" type="text" value={username} setValue={setUsername}/>

      <CreateInput id="text-input" placeholder="Email" type="email" value={email} setValue={setEmail}/>
      <h2>{EmailMessage}</h2>

      <CreateInput id="text-input" placeholder="Password" type="password" value={password} setValue={setPassword}/>
      <h2>{PasswordMessage}</h2>


      <button id="button" onClick={Submit}> {<Verifyifsuccess/>} </button>

      <h2>Already have an account? <a href="/login">Login!</a></h2>
  </div>
  </div>;
}


export default SignUp;

