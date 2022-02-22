import React from 'react';
import PetCard from './PetCard';
import pets from '../petinfo';
import { useEffect } from 'react';
////displays users on the left side of Featured component

export default function UserListDisplay() {

    useEffect(() => {
        fetch("https://localhost:3001")
            .then(res => res.json())
            .then(result)=> {

        }
    })


    return (
        <>
            <div className="flex basis-1/2 flex-row flex-wrap " >

                {pets.map((pet, key) => (
                    <PetCard pet={pet} key={key} />
                ))}

            </div>

        </>
    );
}
