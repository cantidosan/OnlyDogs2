import React from 'react';
import PetCard from './PetCard';
import pets from '../petinfo';
////displays users on the left side of Featured component

export default function UserListDisplay() {



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
