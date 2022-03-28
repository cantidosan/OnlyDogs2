import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserComment from './UserComment';
export default function UserComments(props) {

    const { pic_id, pet_id, url } = props;

    const params = useParams();

    const [commentData, setCommentData] = useState([]);
    console.log('Comment Data', commentData)

    // function handleAddComment(commentValue) {


    //     // onAdd(commentValue)
    //     setCommentData([...commentData, { text: commentValue }])

    // }

    useEffect(() => {

        fetch(`http://localhost:3001/browse/${pic_id}/comments`)

            .then(response => response.json())

            .then(comments => setCommentData(comments))

        console.log('Comment Data', commentData)
    }, [])


    return (
        <div>

            <div className='flex  flex-col basis-1/6'>


                {commentData.map((commentD, key) => (
                    <UserComment commentD={commentD} key={key} />
                ))}
            </div>

            {console.log('Comment Data:', commentData)}

        </div>
    )
}
