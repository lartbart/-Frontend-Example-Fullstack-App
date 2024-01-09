import { useState } from "react";
import { CreateInput } from "../hooks/createInput";
import '../style.css'


export const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');


    return <div className="update-tab">
            <h2>Old Password</h2>
            <CreateInput id="text-input" placeholder="Password" type="password" value={oldPassword} setValue={setOldPassword}/>
            <h2>New Password</h2>
            <CreateInput id="text-input" placeholder="Password" type="password" value={newPassword} setValue={setNewPassword}/>
            <button id="button">Change</button>
    </div>
}