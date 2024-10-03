import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login(props) {
    const [credentials, setcredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()
    const handlesubmit = async (e) => {
        e.preventDefault()
        //Api call
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //save the auth -token and reidirect 
            localStorage.setItem('token', json.authtoken)
            navigate("/")
            props.showAlert("Account Created Successsfully", "success")

        }
        else {

            props.showAlert("invalid details", "danger")

        }
    }
    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" class="form-control" name="email" id="email" value={credentials.email} onChange={onchange} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={credentials.password} onChange={onchange} id="password" />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

