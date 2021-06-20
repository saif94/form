import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import "./Login.css";

const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                    name: name,
                    email: email,
                    password: password,
                    isLoggedIn: true
            })
        );
    };

    return (
        <div className="login">
        <form className="login_form" >
            <h1>Login Here</h1>
            Name: <input
            type= "name" placeholder="Please type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            Email: <input
            type= "email" placeholder="Please type here" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}    
            />
            Password: <input 
            type= "password" placeholder="Please type here"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submit_btn" onClick={(e) => handleSubmit(e)}>
            Submit
            </button>
        </form>
            
        </div>
    )
};

export default Login;
