
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import '../style.css';
import Cookies from 'js-cookie';

const getusername = Cookies.get("_auth_state")?.match(/"name":"([^"]+)"/);

const formatusername = getusername ? getusername[1] : null;

const username = formatusername?.toUpperCase();


function Sidebar({onToggleSettings}: ToggleSettingsProps) {
    const signOut = useSignOut();

    const logOut = () => {
        signOut();
        window.location.reload();
    }

    return <div className="sidebar">
        <h1>{username}</h1>
        <a id='homepage' href='/homepage'>Homepage</a>
        <button id='settings' onClick={onToggleSettings}>Settings</button>
        <button id='logout' onClick={logOut}>Log Out</button>
    </div>

}

export default Sidebar