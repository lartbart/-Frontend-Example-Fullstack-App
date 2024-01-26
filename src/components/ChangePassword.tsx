import { useEffect, useState } from "react";
import { CreateInput } from "../hooks/createInput";
import '../style.css'
import { useUpdate } from "../hooks/useUpdate";



export const ChangePassword = () => {

    const {mutate, isSuccess, isError} = useUpdate()

    const [newPassword, setNewPassword] = useState('');
    const [PasswordMessage, setPasswordMessage] = useState('');

    const usernameObject: UserUpdate = {
        username: null,
        password: null,
        email: null
    };

    const submit = () => {
        if (newPassword.length >= 5) {
            usernameObject.password = newPassword;
            mutate(usernameObject);
        }
        else {
            setPasswordMessage("The password needs to have at least 5 characters")
        }
    }

    useEffect(() => {
        if (isSuccess) {
            setPasswordMessage("password updated!")
        }
        if (isError) {
            setPasswordMessage("something went wrong")
        }
    },[isSuccess, isError]) 


    return <div className="update-tab">
            <h2>New Password</h2>
            <CreateInput id="text-input" placeholder="Password" type="password" value={newPassword} setValue={setNewPassword} submit={() => submit()}/>
            <button id="button" onClick={() => submit() } onKeyDown={(e) => e.key === 'Enter' && submit()}>Change</button>
            <div className="message-box">
                <p>{PasswordMessage}</p>
            </div>
    </div>
}