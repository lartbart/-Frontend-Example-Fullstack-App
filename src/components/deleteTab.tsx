import { useEffect, useState } from 'react'
import '../style.css'
import { useDelete } from '../hooks/useDelete'



export const DeleteTab = () => {
    const [checkBox, setCheckBox] = useState(false)
    const [Message, setMessage] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const {mutate, isSuccess, isError} = useDelete()

    const submit = () => {
        if (!isButtonDisabled) {
            setIsButtonDisabled(true);
            mutate();
            setTimeout(() => {
                setIsButtonDisabled(false)
            }, 2000)
        }
    }
    
    
    useEffect(() => {      
        if (isSuccess) {
            setMessage("Success! You are being redirected to the login page")
            setTimeout(() => {
                window.location.href = '/login'
            }, 2000)
        }
        if (isError) {
            setMessage("something went wrong")
        }
    }, [isSuccess, isError])


    
    return <div className="delete-tab">
                <h2>Delete Account</h2>
                <label htmlFor='DeleteCheckBox'>
                <p>Are you sure?</p>
                <input type="checkbox" name="DeleteCheckBox" id="DeleteCheckBox" checked = {checkBox} onChange={_e => setCheckBox(!checkBox)} />
                <> yes </>
                </label>
                {checkBox && <button onClick={() => submit()} onKeyDown={(e) => e.key === 'Enter' && submit()}>Delete</button>}
                <div className="message-box">
                    <p>{Message}</p>
                </div>
            </div>
}