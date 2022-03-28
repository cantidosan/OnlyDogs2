import React from 'react';
import PetCard from './PetCard';
import { useEffect, useState } from 'react';

////displays users on the left side of Featured component

export default function UserListDisplay() {

    const [petData, setPetData] = useState([]);

    useEffect(() => {


        fetch("http://localhost:3001")
            .then(res => res.json())
            .then(
                (pets) => {

                    setPetData(pets)

                })

    }, [])


    return (
        <>
            {/* <div className="flex basis-1/2 flex-row flex-wrap " >

                {petData.map((pet, key) => (

                    <PetCard pet={pet} key={key} />

                ))}

            </div> */}
            <div className="grid gap-4 grid-cols-3 grid-rows-3" >

                {petData.map((pet, key) => (

                    <PetCard pet={pet} key={key} />

                ))}

            </div>

        </>
    );
}
