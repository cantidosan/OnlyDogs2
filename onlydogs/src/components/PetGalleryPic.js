import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { useParams } from 'react-router-dom';


export default function PetGalleryPic(props) {

    const { url, pet_id } = props;
    const params = useParams();




    // console.log('Gallery Pic:', url)
    return (
        <div className="flex">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={url} />

                <Card.Body>
                    {/* <Card.Title>{title}</Card.Title> */}
                    <Card.Text>

                    </Card.Text>
                    {/* <Button onClick={handleImageDelete} variant="danger">Delete</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
}
