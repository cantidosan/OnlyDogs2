import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import AddPetInfo from './AddPetInfo';
import UploadPetInfo from './UploadPetInfo';
import SelectPet from './SelectPet';


export default function DisplayPic(props) {

    const { url } = props;

    const [picId, setPicId] = useState("");
    const [isAddingPetInfo, setIsAddingPetInfo] = useState(false);



    const [imageSelected, setImageSelected] = useState("");





    const handleAddingPetInfo = (e) => {

        console.log(e.target.value)
        if (e.target.value === 'addPet') {
            setIsAddingPetInfo(true);
        }
        else {
            setIsAddingPetInfo(false);
        }
    }
    return (
        <div>

            <h2>PIC DETAILS</h2>
            <div className='flex flex-row justify-center'>
                <div className="form-check">
                    <input onChange={handleAddingPetInfo} checked={isAddingPetInfo} value="addPet" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">

                        {isAddingPetInfo ? < AddPetInfo imageSelected={imageSelected} /> : ''}

                    </label>
                </div>
                <div className="form-check">
                    <input onChange={handleAddingPetInfo} value="upload" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={!isAddingPetInfo} />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">

                        Default checked radio
                    </label>
                    {!isAddingPetInfo ? <SelectPet /> : ''}
                </div>
                {<UploadPetInfo />}
            </div>

        </div>
    );
}
