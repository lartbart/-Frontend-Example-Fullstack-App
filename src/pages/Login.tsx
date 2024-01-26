
import '../style.css';
import { CreateInput } from '../hooks/createInput';
import { useEffect, useState } from 'react';
import { useLogin } from '../hooks/useLogin';



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

  };
  
  useEffect(() => {
    if (isSuccess) {
      setButtonMessage("Success")
    }
    if (isError) {
      setLoginMessage("The username or password is incorrect")
    }
  }, [isSuccess, isError])



  return (
    <div className="container">
      <div className="form-container">
        <h1 className="header"><b>Log In</b></h1>
        <CreateInput id="text-input" placeholder="Username" type="text" value={username} setValue={setUsername} submit={() => verifyLogin()}/>
        <CreateInput id="text-input" placeholder="Password" type="password" value={password} setValue={setPassword} submit={() => verifyLogin()} />
        <button id="button" onClick={() => verifyLogin()} onKeyDown={(e) => e.key === 'Enter' && verifyLogin()}>{ButtonMessage}</button>
        <h2 className="login-message"><p>{LoginMessage}</p></h2>
        <h2>Don't have an account? <a href="/signup">Sign Up</a></h2>
      </div>
    </div>
  )

}

export default Login;
