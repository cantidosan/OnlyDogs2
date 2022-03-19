import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

export default function Comments(props) {

    const [commentData, setCommentData] = useState([]);
    const { username, url, onAdd, picId } = props;

    function handleAddComment(commentValue) {


        // onAdd(commentValue)
        setCommentData([...commentData, { text: commentValue }])
    }

    function handleDeleteComment(commentId) {


        setCommentData(commentData.filter(function (value, index, arr) {


            return value.comment_id !== commentId;

        }));


    }



    // console.log(commentData)

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
                    <Comment commentD={commentD} key={key} userAvatarUrl={url} username={username} onDeleteComment={handleDeleteComment} />

                ))}
            </div>
            <div>
                <AddComment url={url} onAdd={handleAddComment} picId={picId} />
            </div>

        </div>
    )

}