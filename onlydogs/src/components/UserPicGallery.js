import React from 'react';
import pets from '../petinfo';
import user from './users';
import GalleryPics from './GalleryPics';


export default function UserPicGallery(props) {

    const { userPics } = props;

    return (
        <div className="flex " >

            <div className='flex flex-wrap '>

                {userPics.map((user, key) => (

                    <GalleryPics user={user} key={key} />


                ))};

            </div>


        </div>
    );
}
