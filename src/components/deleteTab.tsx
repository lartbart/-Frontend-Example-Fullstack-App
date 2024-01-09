import { useState } from 'react'
import '../style.css'



export const DeleteTab = () => {
    const [checkBox, setCheckBox] = useState(false)

    return <div className="delete-tab">
                <h2>Delete Account</h2>
                <label htmlFor='DeleteCheckBox'>
                <p>Are you sure?</p>
                <input type="checkbox" name="DeleteCheckBox" id="DeleteCheckBox" checked = {checkBox} onChange={e => setCheckBox(!checkBox)} />
                <> yes </>
                </label>

                {checkBox && <button>Delete</button>}
            </div>
}