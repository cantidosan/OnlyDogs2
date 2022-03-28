import React from 'react';
import AddPetDetails from './AddPetDetails';
import MiniGallery from './MiniGallery';
import Comments from './Comments';
import DisplayMainPetProfilePic from './DisplayMainPetProfilePic';



export default function UserMainPic(props) {

    const { url, username, picId } = props;
    // console.log(url)*


    function handleAddComments(commentValue) {


        console.log(commentValue)
    }

    return (
        <div className='flex'>

            <div className="flex flex-col">
                <div>

                    <DisplayMainPetProfilePic />

                </div>
                <AddPetDetails url={url} />

            </div>
            <div>
                <Comments username={username} url={url} onAdd={handleAddComments} picId={picId} />
                {/* <MiniGallery value={props} /> */}
            </div>
        </div>
    );
}
