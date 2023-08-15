import React from 'react';

const PhotoCard = ({photocard}) =>
{
    return (
        <div class=" grid grid-cols-1 grid-cols-2 grid-cols-3 h-44 w-80 bg-white">
            <figure><img className='mx-28 my-11' src={photocard.img} alt="Shoes" /></figure>
            
        </div>
    );
};

export default PhotoCard;