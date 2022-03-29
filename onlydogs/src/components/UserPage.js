import React from 'react';
import UserPicGallery from './UserPicGallery';
import UserMainPic from './UserMainPic';
import Header from './Header';
import pets from '../petinfo';
import user from './users';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useStateValue } from '../state';
import { useNavigate } from 'react-router-dom';


/// This will show the users Uploadded media 


export default function UserPage() {

    const [userPics, setUserPics] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    const params = useParams();

    let navigate = useNavigate();

    {/*fetch here from DB to get user data*/ }

    if (typeof (user) === null) {

        navigate("/")

    }



    const isUserLoggedIn = !!user && (params.username === user.username)

    // console.log('params.username:', params.username)
    // console.log('user.username', user.username)
    // console.log('!!User:', !!user)
    // console.log('isUserLoggedIn', isUserLoggedIn)

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
        if (isUserLoggedIn) {

            getUserPics();

        } else {

            navigate("/")
        }

    }, [isUserLoggedIn, params.username]);




    return (



        <div>
            <Header />
            <div className='flex'>

                <div className='flex basis-1/2 '>

                    <UserPicGallery userPics={userPics} username={params.username} />

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
