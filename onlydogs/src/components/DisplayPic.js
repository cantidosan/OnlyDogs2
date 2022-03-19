import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";



export default function DisplayPic(props) {

    const CLOUDINARY_KEY = '998933882185921'
    const CLOUDINARY_SECRET = 'VNOBnAxNf76W1tlE5Lv5J_UdLvc'
    const { url } = props;

    // const cld = new Cloudinary({

    //     cloud: {
    //         cloudName: 'demo'
    //     }

    // });

    // const myImage = cld.image('docs/models');
    // myImage.resize(fill().width(250).height(250));

    const [imageSelected, setImageSelected] = useState("")

    const handleImageUpload = async () => {

        const formData = new FormData();
        formData.append("file", imageSelected)
        formData.append("upload_preset", "qbjfqx59")

        // formData.append("timestamp", Date.now())
        // formData.append("eager", "w_400,h_300,c_pad|w_260,h_200,c_crop");
        // formData.append("api_key", CLOUDINARY_KEY)
        // formData.append("signature", CLOUDINARY_SECRET)

        console.log(formData.get("file"))
        console.log(formData.get("upload_preset"))

        const res = await fetch('https://api.cloudinary.com/v1_1/daydto7f1/auto/upload', {

            method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            body: formData
            // JSON.stringify({ formData })

        })
    }



    return (
        <div>
            {/* display user main profile image */}
            {/* <AdvancedImage cldImg={myImage} /> */}
            {/* <img src={url} alt="" /> */}

            <h2>PIC DETAILS</h2>
            <div className='flex flex-row justify-center'>

                <input
                    type="file"
                    onChange={(e) => {
                        setImageSelected(e.target.files[0]);

                    }}
                />

                <ButtonGroup>
                    <Button onClick={handleImageUpload} variant="primary" size="mb-2">Upload</Button>
                    <Button variant="danger">Delete</Button>
                </ButtonGroup>
            </div>

        </div>
    );
}
