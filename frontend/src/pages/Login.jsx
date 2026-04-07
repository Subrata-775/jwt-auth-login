import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        await axios.post(
            "http://localhost:5000/api/auth/login",
            { email, password },
            { withCredentials: true }
        );

        navigate("/dashboard");
    };

    return (

        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">

            <div className="bg-white p-8 rounded-xl shadow-lg w-80">

                <h1 className="text-2xl font-bold text-center mb-6">
                    Login
                </h1>

                <input
                    className="border p-2 w-full mb-4 rounded"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="border p-2 w-full mb-4 rounded"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={login}
                    className="bg-blue-600 text-white w-full p-2 rounded"
                >
                    Login
                </button>

            </div>

        </div>

    );
}

export default Login;