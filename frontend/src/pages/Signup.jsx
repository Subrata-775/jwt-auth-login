import { useState } from "react";
import axios from "axios";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        { email, password },
        { withCredentials: true }
      );

      console.log(res.data);
      alert("Signup successful");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-10 flex flex-col gap-4">

      <h1 className="text-2xl font-bold">Signup</h1>

      <input
        className="border p-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={signup}
        className="bg-blue-500 text-white p-2"
      >
        Signup
      </button>

    </div>
  );
}

export default Signup;