import React, { useState } from 'react'
import { useUser } from '../context/UserContext'
function Profile() {

    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({ id: 1, username: "omer.ozler", bio: "React Kodlama" })
            setLoading(false)
        }, 1000)
    }
    const handleLogout = () => {
        setLoading(true)
        setTimeout(() => {
            setUser(null)
            setLoading(false)
        }, 1000)
    }
    const { user, setUser } = useUser()
    return (
        <div>
            {
                !user && <button onClick={handleLogin}>{loading ? 'loading...' : 'Login'}</button>
            }

            <br />
            <code>{JSON.stringify(user)}</code>
            <br />
            {
                user && <button onClick={handleLogout}>{loading ? 'loading...' : 'Logout'}</button>
            }
        </div>
    )
}

export default Profile
