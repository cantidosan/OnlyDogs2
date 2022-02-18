import React from 'react';
import { Image, Card, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';


export default function Comment(props) {

    const [baconLink, setBaconLink] = useState(['https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'])

    useEffect(() => {

        fetch(baconLink)

            .then(response => response.json())

            .then(response => setBaconLink(response))


    }, [])


    return (
        <div className=''>
            {/*<div className=''>
                <h6>{props.use.label}</h6>
                <Image roundedCircle thumbnail width="60" src={props.use.href} alt="" />
                <p>{baconLink}</p>
            </div> */}

            <Card style={{ width: '34rem' }}>
                <Container  >
                    <Row >
                        <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} sm={2}>
                            <Image roundedCircle thumbnail src={props.use.href} />
                        </Col>
                        <Col sm={8}>
                            <Card.Body>
                                <Card.Title>{props.use.label}</Card.Title>
                                <Card.Text>
                                    {baconLink}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>

                </Container>
            </Card>









        </div>
    );
}
