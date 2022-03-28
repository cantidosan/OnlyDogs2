import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UploadPetInfo from './UploadPetInfo';
export default function SelectPet() {



    const params = useParams();
    const [petId, setPetId] = useState("")
    const [userPets, setUserPets] = useState([]);
    // console.log('setPetId:', petId);

    const handlePetChange = (e) => {

        setPetId(e.target.value)

    }

    useEffect(() => {

        const getUserPets = async () => {

            const res = await fetch(`http://localhost:3001/${params.username}/pets`,)

            const petObjects = await res.json();
            console.log('responseData:', petObjects)
            setUserPets(petObjects)

        }
        getUserPets();

    }, [params.username])
    return (
        <div>
            <select onChange={handlePetChange} className="form-select" aria-label="Default select example">
                <option >Open this select menu</option>
                {
                    userPets.map((userPet, key) => (
                        <option value={userPet.pet_id} key={key}> {userPet.petname} </option>
                    ))
                }
            </select>
            {petId === '' ? '' : <UploadPetInfo petId={petId} />}

        </div>
    )
}
