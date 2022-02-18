import React from 'react';
import { useState } from "react";

///We'll be using Oauth to build this piece out
export default function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        {/*loginUser(name,password)*/ }
    }

    return (
        <div>
            <form className='login-wrapper display: flex;
                flex-direction: column;
                align-items: center' onSubmit={handleSubmit}>

                <label>
                    <p>Username</p>
                    <input type="text" value={name} onChange={
                        e => setName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" value={password} onChange={
                        e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>

    );
}
