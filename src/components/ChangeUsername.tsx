import { useEffect, useState } from "react";
import { CreateInput } from "../hooks/createInput";
import '../style.css'
import { useUpdate } from "../hooks/useUpdate";



export const ChangeUsername = () => {

    const {mutate, isSuccess, isError} = useUpdate();
    const [Message, setMessage] = useState('');
    const [newUsername, setNewUsername] = useState(''); 
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    
    const usernameObject: UserUpdate = {
        username: null,
        password: null,
        email: null
    };
    
    const Submit = () => {
        if (!isButtonDisabled) {
            setIsButtonDisabled(true);
            usernameObject.username = newUsername;
            mutate(usernameObject);
            setTimeout(() => {
                setIsButtonDisabled(false)
            },2000)
        }
    }

    useEffect(() => {
        if (isSuccess) {
            setMessage("Success! You are being redirected to the login page")
            setTimeout(() => {
                window.location.href = '/login'
            }, 2000)
        }
        if (isError) {
            setMessage("the user already exists")
        }
    }, [isSuccess, isError])



    return <div className="update-tab">
            <h2>New Username</h2>
            <CreateInput id="text-input" placeholder="Username" type="text" value={newUsername} setValue={setNewUsername} submit={() => Submit()}/>
            <button id="button" onClick={() => Submit() } onKeyDown={(e) => e.key === 'Enter' && Submit()}>Change</button>
            <div className="message-box">
                <p>{Message}</p>
            </div>
    </div>
}