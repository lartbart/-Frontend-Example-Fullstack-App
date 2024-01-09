import {ChangeUsername} from './ChangeUsername'
import { ChangePassword } from './ChangePassword';
import '../style.css'
import { DeleteTab } from './deleteTab';
import { useState } from 'react';
import { ChangeEmail } from './ChangeEmail';




export const SettingsModal = ({onToggleSettings}: ToggleSettingsProps) => {


    const [selectedTab, setSelectedTab] = useState(<ChangeUsername/>)



    return <div className="settings-modal">
                <div className="form-container">
                    <div className="header">
                        <button onClick={_e => setSelectedTab(<ChangeUsername/>)}>Change Username</button>
                        <button onClick={_e => setSelectedTab(<ChangeEmail/>)}>Change Email</button>
                        <button onClick={_e => setSelectedTab(<ChangePassword/>)}>Change Password</button>
                        <button onClick={_e => setSelectedTab(<DeleteTab/>)}>Delete Account</button>
                        <button onClick={onToggleSettings}>X</button>
                    </div>
                    <div>
                        {selectedTab}
                    </div>
                </div>
            </div>
    
}