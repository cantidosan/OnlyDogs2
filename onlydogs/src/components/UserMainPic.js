import React from 'react';
import DisplayPic from './DisplayPic';
import MiniGallery from './MiniGallery';
import Comments from './Comments';



export default function UserMainPic(props) {

    const { url, username, picId } = props;
    // console.log(url)*


    function handleAddComments(commentValue) {


        console.log(commentValue)
    }

    return (
        <div className='flex'>

            <div className="flex flex-col">
                <DisplayPic url={url} />
            </div>
            <div>
                <Comments username={username} url={url} onAdd={handleAddComments} picId={picId} />
                {/* <MiniGallery value={props} /> */}
            </div>
        </div>
    );
}
