import React, { useEffect } from "react";
import { figure, figcaption } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom';

export default function PetCard(props) {

    const { pet } = props;
    let navigate = useNavigate();

    console.log(pet)
    function handleRedirect() {


        navigate(`/Browse/${pet.pet_id}`)



    }



    return (

        // <div className="bg-cyan-100 flex  items-center 
        //     px-44 border-4 m-3 rounded-full">
        //     <div  >
        //         {/* make this prop clickable with the proprs.pet.id
        //         and LInk it to Userpage.js

        //         */}
        //         {pet.petname}

        //     </div>

        // </div>
        <div className="conatiner">

            <figure className="figure" onClick={handleRedirect} >

                <img src={pet.link} className="figure-img img-fluid rounded" alt="..." />

                <figcaption className="figure-caption">{pet.petname}</figcaption>

            </figure>

        </div>
    );
}
