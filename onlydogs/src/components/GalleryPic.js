import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { useParams } from 'react-router-dom';


export default function GalleryPics(props) {

    const { url, title, picId } = props;
    const params = useParams();



    const handleImageDelete = async () => {


        const res = await fetch(`http://localhost:3001/${params.username}/pictures/${picId}`, {

            method: 'DELETE',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify({ url })
            // JSON.stringify({ formData })

        })

    }
    // console.log('Gallery Pic:', url)
    return (
        <div className="flex">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={url} />

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Button onClick={handleImageDelete} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
