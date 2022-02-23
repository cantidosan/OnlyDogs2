import React from 'react';
import PetCard from './PetCard';
import pets from '../petinfo';
import { useEffect } from 'react';
////displays users on the left side of Featured component

export default function UserListDisplay() {

    useEffect(() => {
        console.log("LOGGED")
        fetch("http://localhost:3001")
            .then(res => res.json())
            .then(
                (pets) => {
                    console.log('Results: %o', pets)

                })
    }, [])


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
