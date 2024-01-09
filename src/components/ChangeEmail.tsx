import { useState } from "react";
import { CreateInput } from "../hooks/createInput";
import '../style.css'


export const ChangeEmail = () => {

    const [oldEmail, setOldEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
     


    return <div className="update-tab">
            <h2>Old Email</h2>
            <CreateInput id="text-input" placeholder="Email" type="email" value={oldEmail} setValue={setOldEmail}/>
            <h2>New Email</h2>
            <CreateInput id="text-input" placeholder="Email" type="email" value={newEmail} setValue={setNewEmail}/>
            <button id="button">Change</button>
    </div>
}