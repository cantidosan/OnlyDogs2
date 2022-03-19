import React from 'react';
import UserPicGallery from './UserPicGallery';
import UserMainPic from './UserMainPic';
import Header from './Header';
import pets from '../petinfo';
import user from './users';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


/// This will show the users Uploadded media 


export default function UserPage() {

    const [userPics, setUserPics] = useState([]);
    const params = useParams();


    {/*fetch here from DB to get user data*/ }



    useEffect(() => {
        const getUserPics = async () => {

            const res = await fetch(`http://localhost:3001/${params.username}`);
            const responseJson = await res.json();

            // Ensure responseJson is suitable object to pass into components
            //below
            // console.log('responseJson :', responseJson)

            //Set object into local state variable
            setUserPics(responseJson);

        };
        getUserPics();
    }, [params.username]);

    // console.log('user', userPics)
    return (

        <div>
            <Header />
            <div className='flex'>

                <div className='flex basis-1/2 '>

                    <UserPicGallery userPics={userPics} />

                </div>
                <div className='flex basis-1/2 '>

                    {
                        userPics.length &&
                        <UserMainPic url={userPics[0].url} username={params.username} picId={userPics[0].pic_id} />
                    }

                </div>


            </div>
        </div>
    );
}
