import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';


export default function DisplayPic() {
    return (
        <div>
            {/* display user main profile image */}
            <img src="https://picsum.photos/720/560" alt="" />
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
