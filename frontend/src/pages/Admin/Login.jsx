import { useState } from "react";
import axios from "axios";

const Login= () =>{ 

    const [email, setEmail]= useState([]);

    const [password,setPassword] = useState([]);

    const handleLogin = async(e)=>{
        e.preventDefault();

        const res = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
            {email,password}
        );

        localStorage.setItem('token',res.data.token);
        alert(`Login successful`);
    }

    return (
        <form onSubmit={handleLogin}>
            <h2>Admin Login</h2>
            <input type="email"  placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input  type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}/>
            <button>Login</button>
        </form>
    );

};

export default Login;