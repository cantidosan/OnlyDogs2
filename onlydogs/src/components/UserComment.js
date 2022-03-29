import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Row, Container, Image, Col } from 'react-bootstrap';

import { useStateValue } from '../state';


export default function UserComment(props) {

    const params = useParams();

    const [{ user }, dispatch] = useStateValue();

    console.log('Global User:', user)

    const [userInfo, setUserInfo] = useState([]);

    console.log('UserInfo:', userInfo)

    // const [{ user }, dispatch] = useStateValue();
    // console.log('user:', user);

    const { commentD } = props;

    const {

        comment_id,
        pic_id,
        user_id,
        text,

    } = commentD;

    console.log('Comment userID:', user_id)
    console.log('CommentId:', comment_id)

    useEffect(() => {

        fetch(`http://localhost:3001/findUser/${user_id}`)

            .then(res => res.json())

            .then(userData => setUserInfo(userData))

    }, [user_id])





    return (
        <div>
            <div className=''>

                <Card style={{ width: '34rem' }}>
                    <Container  >
                        <Row >
                            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} sm={2}>
                                <Image roundedCircle thumbnail src={userInfo.length === 0 ? '' : userInfo[0].user_pic_url} />
                            </Col>
                            <Col sm={8}>
                                <Card.Body>
                                    <Card.Title>{userInfo.length === 0 ? '' : userInfo[0].username}</Card.Title>
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
