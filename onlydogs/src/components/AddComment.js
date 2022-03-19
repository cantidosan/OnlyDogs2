import React, { useState } from 'react'
import { useParams } from 'react-router-dom';


export default function AddComment(props) {

    const [commentValue, setCommentValue] = useState("");
    const params = useParams();

    const { url, onAdd, picId } = props;



    const handleSubmit = async (e) => {

        e.preventDefault();

        const res = await fetch(`http://localhost:3001/${params.username}/comments`, {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ commentValue, picId })

        });

        // console.log('params', params)
        onAdd(commentValue);
        setCommentValue("");

    }


    const handleInput = (e) => {


        setCommentValue(e.target.value)
    }

    return (
        <div className='flex'>


            <textarea className="w-full h-16 px-3 py-2 text-base 
                            text-gray-700 placeholder-gray-600 
                            border rounded-lg focus:shadow-outline"
                placeholder="comment..."
                onChange={handleInput} value={commentValue}
            >

            </textarea>

            <button className="bg-blue-500 hover:bg-blue-700 text-white 
                            font-bold py-2 px-4 border 
                            border-blue-700 rounded"
                onClick={handleSubmit}
            >
                submit
            </button>

        </div>
    )
}
