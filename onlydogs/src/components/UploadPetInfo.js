import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function UploadPetInfo(props) {


    const { petName, petAge, petBreed, petId } = props
    const params = useParams();
    const [picId, setPicId] = useState("");
    const [imageSelected, setImageSelected] = useState("");



    const handleImageUpload = async () => {

        const formData = new FormData();
        formData.append("file", imageSelected)
        formData.append("upload_preset", "qbjfqx59")
        // formData.append("public_id", petId)
        // formData.append("eager", "w_400,h_300,c_pad|w_260,h_200,c_crop");
        // formData.append("api_key", CLOUDINARY_KEY)
        // formData.append("signature", CLOUDINARY_SECRET)

        // console.log(formData.get("file"))
        // console.log(formData.get("upload_preset"))

        const res = await fetch('https://api.cloudinary.com/v1_1/daydto7f1/auto/upload', {

            method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            body: formData
            // JSON.stringify({ formData })

        })
        const cloudinaryObj = await res.json()
        /// we can now access the image id after it is uploaded to cloudinary

        setPicId(cloudinaryObj)

    }

    useEffect(() => {

        const resImageInfo = fetch(`http://localhost:3001/${params.username}/pictures`, {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // Commented out because we havent worked out how component
            // recieves the petID object
            body: JSON.stringify({ picId, petId })

        });

    }, [picId, params.username])

    return (
        <div>UploadPetInfo
            <input
                type="file"
                onChange={(e) => {
                    setImageSelected(e.target.files[0]);
                }}
            />
            <ButtonGroup>
                <Button onClick={handleImageUpload} variant="primary" size="mb-2">Upload</Button>
                {/* <Button onClick={handleImageDelete} variant="danger">Delete</Button> */}
            </ButtonGroup>
        </div>
    )
}

export default UploadPetInfo