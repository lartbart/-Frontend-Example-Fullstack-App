import { useState } from "react";
import Sidebar from "../components/sidebar";
import "../style.css"
import { SettingsModal } from "../components/settingsModal";
import Cookies from "js-cookie";


function Homepage() {




    const [Sidebarvisible, setSidebarvisible] = useState(false);
    const [SettingsVisible, setSettingsVisible] = useState(false);

    const Togglesidebar = () => {
        setSidebarvisible(!Sidebarvisible)
    }

    const toggleSettings = () => {
        setSettingsVisible(!SettingsVisible);
    };

    const getusername = Cookies.get("_auth_state")?.match(/"name":"([^"]+)"/);

    const username = getusername ? getusername[1] : null;




    return <div className="homepage-container">
            <div className="top-panel">
                <button id="sidebar-button" onClick={Togglesidebar}>≡</button>
            </div>
                {Sidebarvisible && <Sidebar onToggleSettings={toggleSettings}/>}
                {SettingsVisible && <SettingsModal onToggleSettings={toggleSettings}/>}  
            <div className="view">
                <h1>Hello, <b>{username}</b></h1>
            </div>

           </div>
    
}


export default Homepage