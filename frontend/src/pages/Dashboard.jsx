import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard(){

  const navigate = useNavigate();

  const [user,setUser] = useState(null);

  useEffect(()=>{

    axios.get(
      "http://localhost:5000/api/auth/dashboard",
      {withCredentials:true}
    )
    .then(res=>{
      setUser(res.data.user);
    })
    .catch(()=>{
      navigate("/login");
    });

  },[]);


  const logout = async ()=>{

    await axios.get(
      "http://localhost:5000/api/auth/logout",
      {withCredentials:true}
    );

    navigate("/login");

  };


  return(

    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">

      {/* Navbar */}

      <div className="flex justify-between items-center bg-white p-4 shadow">

        <h1 className="text-xl font-bold">
          My Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>


      {/* Welcome Section */}

      <div className="text-center text-white mt-10">

        <h2 className="text-3xl font-bold">
          Welcome {user?.id}
        </h2>

        <p className="mt-2">
          You are successfully logged in 🎉
        </p>

      </div>


      {/* Cards Section */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">
            Profile
          </h3>
          <p>
            Manage your profile information.
          </p>
        </div>


        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">
            Activity
          </h3>
          <p>
            View your recent activity.
          </p>
        </div>


        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">
            Settings
          </h3>
          <p>
            Customize your dashboard settings.
          </p>
        </div>

      </div>


      {/* Footer */}

      <div className="text-center text-white pb-6">

        <p>
          MERN Authentication Project 🚀
        </p>

      </div>

    </div>

  );
}

export default Dashboard;