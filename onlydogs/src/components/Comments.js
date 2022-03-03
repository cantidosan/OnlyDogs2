import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import user from './users';
import AddComment from './AddComment';

export default function Comments(props) {

    const [commentData, setCommentData] = useState([]);
    const { username, url, onAdd, picId } = props;

    function handleAddComment(commentValue) {


        onAdd(commentValue)

    }



    useEffect(() => {

        fetch(`http://localhost:3001/${username}/comments`)

            .then(response => response.json())

            .then(response => setCommentData(response))


    }, [])



    return (
        <div>
            <div>

                {/*styled sub-header  for List of comments and likes*/}


            </div>
            <div className='flex  flex-col basis-1/6'>

                {/* List Comments this will require building out a basic comment component */}
                {commentData.map((commentD, key) => (
                    <Comment commentD={commentD} key={key} />

                ))}
            </div>
            <div>
                <AddComment url={url} onAdd={handleAddComment} picId={picId} />
            </div>

        </div>
    )

}