import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useStateValue } from '../state';
import { useNavigate } from 'react-router-dom';

export default function DisplayMainPetProfilePic(props) {

    const { pic_id, onAdd, link } = props;
    const [commentValue, setCommentValue] = useState("");
    const [{ user }, dispatch] = useStateValue();

    let navigate = useNavigate();

    console.log('User value:', !!user)
    // if (user === null) {

    //     navigate("/login")

    // }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const res = await fetch(`http://localhost:3001/addcomments`, {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ commentValue, pic_id, user })

        });

        // console.log('params', params)
        // onAdd(commentValue);

        setCommentValue("");

    }

    const handleInput = (e) => {


        setCommentValue(e.target.value)

    }


    return (

        <div>DisplayMainPetProfilePic

            <div className="flex">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={link} />

                    <Card.Body>
                        {/* <Card.Title>{title}</Card.Title> */}
                        <Card.Text>

                        </Card.Text>
                        {/* <Button onClick={handleImageDelete} variant="danger">Delete</Button> */}
                    </Card.Body>
                </Card>
                <textarea className="w-full h-16 px-3 py-2 text-base 
                            text-gray-700 placeholder-gray-600 
                            border rounded-lg focus:shadow-outline"
                    placeholder="comment..."


                    onChange={handleInput} value={commentValue}>

                </textarea>
                <button className="bg-blue-500 hover:bg-blue-700 text-white 
                            font-bold py-2 px-4 border 
                            border-blue-700 rounded"
                    onClick={handleSubmit}
                >
                    submit
                </button>
            </div>
        </div>
    )
}
