import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

export default function Header() {


    return (

        <div className=" bg-yellow-200">

            <nav className="flex flex-row  justify-between">

                <div className="flex p-10">
                    LOGO
                </div>

                <div className="flex p-10">
                    <h2 className="text-xl">Only-Dogs</h2>
                </div>

                <div className="flex p-10">
                    <Link to="Login">Login</Link>
                </div>
            </nav>

        </div>
    );
}
