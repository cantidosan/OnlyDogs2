import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import user from './users';

export default function Comments() {



    return (
        <div>
            <div>

                {/*styled sub-header  for List of comments and likes*/}


            </div>
            <div className='flex  flex-col basis-1/6'>

                {/* List Comments this will require building out a basic comment component */}
                {user.map((use, key) => (
                    <Comment use={use} key={key} />

                ))}
            </div>

        </div>
    );
}
