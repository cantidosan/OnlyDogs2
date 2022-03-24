import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PetSelect() {



    const params = useParams();

    const [userPets, setUserPets] = useState([]);

    const handlePetChange = () => {






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
            <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                {
                    userPets.map((userPet, key) => (
                        <option onChange={handlePetChange} value={userPet.pet_id} key={key}> {userPet.petname} </option>
                    ))
                }
            </select>

        </div>
    )
}
