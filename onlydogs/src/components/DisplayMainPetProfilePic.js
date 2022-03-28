import React from 'react'
import { Card, Button } from 'react-bootstrap';
export default function DisplayMainPetProfilePic(props) {

    const { pic_id, link } = props;





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
            </div>
        </div>
    )
}
