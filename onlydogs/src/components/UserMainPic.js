import React from 'react';
import user from './users';
import pets from '../petinfo';
import DisplayPic from './DisplayPic';
import MiniGallery from './MiniGallery';
import Comments from './Comments';



export default function UserMainPic(props) {


    return (
        <div className='flex'>

            <div className="flex flex-col">
                <DisplayPic />
            </div>
            <div>
                <Comments />
                <MiniGallery />
            </div>
        </div>
    );
}
