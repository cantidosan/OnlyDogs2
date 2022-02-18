import React from 'react';
import dog1 from '../img/dog1.png';
import pets from '../petinfo';
import { Carousel } from 'react-bootstrap'

///Displays random media from users onto home page
export default function Featured() {
    return (
        <div className='flex basis-1/2 '>
            <Carousel>
                {pets.map((pet, index) => {

                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={`${pet.href}?random=${index}`}
                                alt=''
                            />
                            <Carousel.Caption>

                                <h3 className="text-8xl p-50">Featured Pets</h3>
                                <h2 className="text-6xl p-50 ">Breed:{pet.breed}  </h2>
                                <h2 className="text-4xl p-50">Age:{pet.age}   </h2>
                                <h2 className="text-3xl p-50">Favourite Food:{pet.food}</h2>

                            </Carousel.Caption>

                        </Carousel.Item>
                    )
                })}
            </Carousel>

        </div>
    );
}
