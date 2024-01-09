import { useState } from "react";
import { CreateInput } from "../hooks/createInput";
import '../style.css'


export const ChangeUsername = () => {

    const [oldUsername, setOldUsername] = useState(''); 
    const [newUsername, setNewUsername] = useState(''); 


    return <div className="update-tab">
            <h2>Old Username</h2>
            <CreateInput id="text-input" placeholder="Username" type="text" value={oldUsername} setValue={setOldUsername}/>
            <h2>New Username</h2>
            <CreateInput id="text-input" placeholder="Username" type="text" value={newUsername} setValue={setNewUsername}/>
            <button id="button">Change</button>
    </div>
}