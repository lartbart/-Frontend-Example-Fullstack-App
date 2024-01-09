
import '../style.css';
import { CreateInput } from '../hooks/createInput';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import useSignIn from 'react-auth-kit/hooks/useSignIn';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [LoginMessage, setLoginMessage] = useState('');
  const [ButtonMessage, setButtonMessage] = useState('Log in');

  const { isSuccess, mutate, isError} = useLogin();


  const verifyLogin = () => {
    const userdata: UserLogin = {
      username,
      password
    }

    mutate(userdata)

    if (isSuccess) {
      setButtonMessage("Success")
    }
    if (isError) {
      setLoginMessage("Username or Password is Incorrect")
    }
  };



  return (
    <div className="container">
      <div className="form-container">
        <h1 className="header"><b>Log In</b></h1>
        <CreateInput id="text-input" placeholder="Username" type="text" value={username} setValue={setUsername} />
        <CreateInput id="text-input" placeholder="Password" type="password" value={password} setValue={setPassword} />
        <button id="button" onClick={verifyLogin}>{ButtonMessage}</button>
        <h2 className="login-message"><p>{LoginMessage}</p></h2>
        <h2>Don't have an account? <a href="/signup">Sign Up</a></h2>
      </div>
    </div>
  )

}

export default Login;
