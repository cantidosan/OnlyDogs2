import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';


export default function GalleryPics(props) {



    return (
        <div className="flex">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={props.user.url} />
                <Card.Body>
                    <Card.Title>{props.user.label}</Card.Title>
                    <Card.Text>
                        {props.user.text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
