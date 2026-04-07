import axios from "axios"
import { useEffect, useState } from "react"

export default function Dashboard() {

    const [data, setData] = useState("")

    useEffect(() => {

        axios.get(
            "http://localhost:5000/api/auth/dashboard",
            { withCredentials: true }
        )
            .then(res => setData(res.data.message))
            .catch(() => alert("Unauthorized"))

    }, [])

    return (

        <div className="p-10">

            <h1 className="text-2xl font-bold">
                {data}
            </h1>

        </div>

    )

}