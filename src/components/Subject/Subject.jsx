import React from 'react';

const Subject = ({ subject }) => {
    // console.log(subject);
    const { image, class_name, description } = subject;

    return (
        <div className='text-center p-1'>
            <img className='rounded-full w-52 h-52 mx-auto' src={image} alt="" />
            <h3 className='text-2xl my-4 font-bold'>{class_name}</h3>
            <p className='text-gray-600 w-3/4 mx-auto'>{description}</p>
        </div>
    );
};

export default Subject;