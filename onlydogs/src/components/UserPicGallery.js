import React from 'react';
import pets from '../petinfo';
import user from './users';
import GalleryPic from './GalleryPic';


export default function UserPicGallery(props) {

    const { userPics } = props;
    console.log('UserPics', userPics)

    return (
        <div className="flex " >

            <div className='flex flex-wrap '>

                {userPics.map((user, key) => (

                    <GalleryPic url={user.url} key={key} title={user.username} picId={user.pic_id} />


                ))};

            </div>


        </div>
    );
}
