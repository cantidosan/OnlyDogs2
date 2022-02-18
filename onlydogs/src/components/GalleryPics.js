import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';


export default function GalleryPics(props) {

    const [baconLink, setBaconLink] = useState(['https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=${props.key}'])

    useEffect(() => {

        fetch(baconLink)

            .then(response => response.json())

            .then(response => setBaconLink(response))


    }, [])

    return (
        <div className="flex">

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={props.pet.href} />
                <Card.Body>
                    <Card.Title>{props.pet.label}</Card.Title>
                    <Card.Text>
                        {baconLink}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
