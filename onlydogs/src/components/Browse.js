import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PetGalleryPic from './PetGalleryPic';
import Header from './Header';
import UserComments from './UserComments';
import DisplayMainPetProfilePic from './DisplayMainPetProfilePic'


export default function Browse() {

    const params = useParams();
    const [petPics, setPetPics] = useState([]);


    useEffect(() => {

        console.log('PRE RENDER:')

        const getPetPics = async () => {


            console.log('PetPicsprior:')

            const res = await fetch(`http://localhost:3001/browse/${params.pet_id}`)

            const petObj = await res.json();

            setPetPics(petObj);

            console.log('PetPics', petPics)
        }
        getPetPics();

    }, [params.pet_id])



    return (
        <div>
            <Header />
            <div className="flex " >

                <div className='flex flex-wrap '>

                    {
                        petPics.map((pet, key) => (
                            <PetGalleryPic url={pet.url} key={key} pet_id={params.pet_id} />
                        ))
                    }
                </div>

                <div>

                    {petPics.length === 0 ? '' : < DisplayMainPetProfilePic pic_id={petPics[0].pic_id} link={petPics[0].url} />}
                    {petPics.length === 0 ? '' : < UserComments pic_id={petPics[0].pic_id} pet_id={params.pet_id} url={petPics[0].user_pic_url} />}

                </div>





            </div>
        </div>
    )
}
