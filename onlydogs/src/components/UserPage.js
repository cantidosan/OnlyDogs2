import React from 'react';
import UserPicGallery from './UserPicGallery';
import UserMainPic from './UserMainPic';
import Header from './Header';
import pets from '../petinfo';
import user from './users';

/// This will show the users Uploadded media 
export default function UserPage() {
    return (

        <div>
            <Header />
            <div className='flex'>

                <div className='flex basis-1/2 '>

                    <UserPicGallery />

                </div>
                <div className='flex basis-1/2 '>

                    <UserMainPic value={pets} />

                </div>


            </div>
        </div>
    );
}
