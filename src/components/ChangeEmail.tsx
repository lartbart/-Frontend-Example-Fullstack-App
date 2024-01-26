import { useEffect, useState } from "react";
import { CreateInput } from "../hooks/createInput";
import '../style.css'
import { useUpdate } from "../hooks/useUpdate";



export const ChangeEmail = () => {

    const {mutate, isSuccess, isError} = useUpdate()

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const [EmailMessage, setEmailMessage] = useState('');

    const [newEmail, setNewEmail] = useState('');

    const usernameObject: UserUpdate = {
        username: null,
        password: null,
        email: null
    };
     
    const submit = () => {
        if (emailRegex.test(newEmail)) {
            usernameObject.email = newEmail;
            mutate(usernameObject);
        }
        else {
            setEmailMessage("The email is invalid")
        }
    }

    useEffect(() => {
        if (isSuccess) {
            setEmailMessage("email updated!")
        }
        if (isError) {
            setEmailMessage("something went wrong")
        }
    }, [isSuccess, isError])


    return <div className="update-tab">
            <h2>New Email</h2>
            <CreateInput id="text-input" placeholder="Email" type="email" value={newEmail} setValue={setNewEmail} submit={() => submit()}/>
            <button id="button" onClick={() => submit()} onKeyDown={(e) => e.key === 'Enter' && submit()}>Change</button>
            <div className="message-box">
                <p>{EmailMessage}</p>
            </div>
    </div>
}