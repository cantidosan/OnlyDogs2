import React from 'react';
import { Image, Card, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';




export default function Comment(props) {

    const params = useParams();


    const {
        commentD,
        userAvatarUrl,
        username,
        onDeleteComment,

    } = props;

    const {
        comment_id: commentId,
        pic_id: picId,
        user_id: userId,
        text,

    } = commentD;


    let navigate = useNavigate();

    const handleDeleteComment = async () => {

        // navigate(`/${params.username}/comments/${params.commentId}`)

        const res = await fetch(`http://localhost:3001/${params.username}/comments`, {

            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ commentId })

        });

        onDeleteComment(commentId);

    }


    const handleLikeComment = async () => {


    }




    return (
        <div className=''>

            <Card style={{ width: '34rem' }}>
                <Container  >
                    <Row >
                        <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} sm={2}>
                            <Image roundedCircle thumbnail src={userAvatarUrl} />
                        </Col>
                        <Col sm={8}>
                            <Card.Body>
                                <Card.Title>{username}</Card.Title>
                                <Card.Text>
                                    {text}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col style={{ justifyContent: 'right' }} sm={2}>
                            <ButtonGroup >
                                {/* <Button variant="primary" size="mb-2" onClick={handleLikeComment}>Like</Button> */}
                                <Button variant="danger" onClick={handleDeleteComment}>Delete</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>

                </Container>
            </Card>


        </div>
    )

}