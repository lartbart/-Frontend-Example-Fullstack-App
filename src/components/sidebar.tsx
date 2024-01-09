
import '../style.css'




function Sidebar({onToggleSettings}: ToggleSettingsProps) {
    return <div className="sidebar">
        <h1>Lucas</h1>
        <a id='homepage' href='/homepage'>Homepage</a>
        <button id='settings' onClick={onToggleSettings}>Settings</button>
        <button id='logout'>Log Out</button>
    </div>

}

export default Sidebar