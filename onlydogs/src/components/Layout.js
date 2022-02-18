import React from 'react';
import Featured from './Featured';
import UserListDisplay from './UserListDisplay';


export default function Layout() {
    return (
        <div className='flex'>
            <UserListDisplay />
            <Featured />

        </div>
    );
}
