import React, { useEffect } from "react";

export default function PetCard(props) {

    const { pet } = props;
    console.log(pet)

    return (

        <div className="bg-cyan-100 flex  items-center 
            px-44 border-4 m-3 rounded-full">
            <div  >
                {/* make this prop clickable with the proprs.pet.id
                and LInk it to Userpage.js

                */}
                {pet.petname}

            </div>

        </div>
    );
}
