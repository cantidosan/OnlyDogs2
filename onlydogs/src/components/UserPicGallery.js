import React from 'react';
import pets from '../petinfo';
import user from './users';
import GalleryPics from './GalleryPic';


export default function UserPicGallery(props) {

    const { userPics } = props;
    console.log('UserPics', userPics)

    return (
        <div className="flex " >

            <div className='flex flex-wrap '>

                {userPics.map((user, key) => (

                    <GalleryPics url={user.url} key={key} title={user.username} picId={user.pic_id} />


                ))};

            </div>


        </div>
    );
}
