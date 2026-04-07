import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {

        await axios.post(
            "http://localhost:5000/api/auth/login",
            { email, password },
            { withCredentials: true }
        )

        navigate("/dashboard")

    }

    return (

        <div className="flex flex-col gap-4 p-10">

            <input
                className="border p-2"
                placeholder="email"
                onChange={e => setEmail(e.target.value)}
            />

            <input
                className="border p-2"
                type="password"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
            />

            <button
                className="bg-green-500 text-white p-2"
                onClick={login}
            >
                Login
            </button>

        </div>

    )

}