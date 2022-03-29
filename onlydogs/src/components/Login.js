import React from 'react';
import { useState } from "react";
import Axios from 'axios';
import UserPage from './UserPage';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../state';


///We'll be using Oauth to build this piece out

export default function Login() {


    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState("");

    const [{ user }, dispatch] = useStateValue();

    console.log('User: ', user);

    let navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();


        const res = await fetch("http://localhost:3001/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })

        });
        ///const response = await res.json();
        const user = await res.json();


        if (user && user.username) {

            dispatch({ type: 'userLogin', payload: user });
            setIsLoggedIn("true");
            dispatch({ type: 'userLogin', payload: isLoggedIn });



            console.log('Userrr username:', user.username)

            navigate(`/${user.username}`);

        }
        else {

            navigate("login");
        }

    }

    return (
        <div>
            <label>
                <p>Username</p>
                <input type="text" value={username} onChange={
                    e => setName(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" value={password} onChange={
                    e => setPassword(e.target.value)} />
            </label>
            {/* <label>
                <p>Email</p>
                <input type="email" value={email} onChange={
                    e => setEmail(e.target.value)} />
            </label> */}
            <div>
                <button type="button" onClick={handleSubmit}>Submit</button>



            </div>


        </div>

    );
}
