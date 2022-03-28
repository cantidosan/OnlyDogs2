import React from 'react';
import Featured from './Featured';
import UserListDisplay from './UserListDisplay';


export default function Layout() {
    return (
        <div className='flex h-1/2 w-1/2'>
            <div>
                <UserListDisplay />
            </div>
            <div>
                <Featured />
            </div>
        </div>
    );
}
