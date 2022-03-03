import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';


export default function DisplayPic(props) {

    const { url } = props;

    return (
        <div>
            {/* display user main profile image */}
            <img src={url} alt="" />
            <h2>PIC DETAILS</h2>
            <div className='flex flex-row justify-center'>
                <ButtonGroup>
                    <Button variant="primary" size="mb-2">Upload</Button>
                    <Button variant="danger">Delete</Button>
                </ButtonGroup>
            </div>

        </div>
    );
}
