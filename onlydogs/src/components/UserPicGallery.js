import React from 'react';
import pets from '../petinfo';
import user from './users';
import GalleryPics from './GalleryPics';


export default function UserPicGallery() {


    return (
        <div className="flex " >

            <div className='flex flex-wrap '>

                {pets.slice(0, 8).map((pet, key) => (

                    <GalleryPics pet={pet} key={key} />


                ))};

            </div>


        </div>
    );
}
