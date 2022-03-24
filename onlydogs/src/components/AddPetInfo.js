import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function AddPetInfo(props) {


    const { } = props;
    const params = useParams();

    const [petName, setPetName] = useState("");
    const [petBreed, setPetBreed] = useState("");
    const [petAge, setPetAge] = useState("");
    const [petId, setPetId] = useState("");


    const handlePetInfoUpload = async () => {

        const res = await fetch(`http://localhost:3001/${params.username}/pets`, {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ petName, petBreed, petAge })

        })
        // console.log('res:', res)
        const petObject = await res.json();
        // console.log('PetObject:', petObject.message.fields[0].dataTypeID)
        setPetId(petObject.message.fields[0].dataTypeID)


    }
    return (
        <div>
            <label>Pet Name:
                <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}

                />
            </label>
            <label>Breed:
                <input
                    type="text"
                    value={petBreed}
                    onChange={(eve) => setPetBreed(eve.target.value)}

                />
            </label>
            <label>Age:
                <input
                    type="text"
                    value={petAge}
                    onChange={(event) => setPetAge(event.target.value)}

                />
            </label>
            <input
                type="submit"
                value="Submit"
                onClick={handlePetInfoUpload}
            />


        </div>


    )
}

export default AddPetInfo