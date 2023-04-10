import React from 'react';
import { Link } from 'react-router-dom';

const Student = ({ student }) => {
    // console.log(student);
    const { id, image, student_name, location } = student;

    return (
        <div className='border p-1 pb-2 border-gray-500 rounded'>
            <div className='w-full'>
                <img className='h-48 w-96 rounded' src={image} alt="" />
            </div>
            <h3 className='text-2xl font-bold my-3'>Name: {student_name}</h3>
            <p className='font-bold mb-3'>Address: {location.city_name}, {location.country_name}</p>
            <Link to={`/profile/${id}`}>
                <button className='ms-auto block border bg-orange-400 border-gray-700 py-1 font-semibold px-2 rounded-md'>Visit Profile</button>
            </Link>
        </div>
    );
};

export default Student;