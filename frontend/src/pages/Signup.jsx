import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {

    await axios.post(
      "http://localhost:5000/api/auth/signup",
      { email, password }
    );

    alert("Signup successful");

    navigate("/login"); // redirect to login
  };

  return (

    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">

      <div className="bg-white p-8 rounded-xl shadow-lg w-80">

        <h1 className="text-2xl font-bold text-center mb-6">
          Signup
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
          onClick={signup}
          className="bg-purple-600 text-white w-full p-2 rounded"
        >
          Signup
        </button>

      </div>

    </div>

  );
}

export default Signup;