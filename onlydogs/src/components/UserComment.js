import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Row, Container, Image, Col } from 'react-bootstrap';



export default function UserComment(props) {

    const params = useParams();

    const {

        comment_id,
        pic_id,
        user_id,
        text,

    } = props;

    useEffect(() => {
        const res = fetch(`http://localhost:3001/`)


    })

    return (
        <div>
            <div className=''>

                <Card style={{ width: '34rem' }}>
                    <Container  >
                        <Row >
                            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} sm={2}>
                                <Image roundedCircle thumbnail src={''} />
                            </Col>
                            <Col sm={8}>
                                <Card.Body>
                                    <Card.Title>{''}</Card.Title>
                                    <Card.Text>
                                        {text}
                                    </Card.Text>
                                </Card.Body>
                            </Col>

                        </Row>

                    </Container>
                </Card>


            </div>
        </div>
    )
}
