import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { stuId } = useParams(); // useParams return obj and we get value with destructuring; obj inside key(:dynamic route), value(passing specific data(id) from btn or link);
    console.log(stuId);

    const [singleStu, setSingleStu] = useState({});


    useEffect(() => {
        fetch("../../../../public/students.json")
            .then(res => res.json())
            // .then(data => setStudents(data));
            .then(students => {
                const stu = students.find(student => student.id === parseInt(stuId));
                setSingleStu(stu);
                // when res.json(), then data is normal js code(obj), so json data string type num property is convert to num, and, stuId is string type num, so, we need to parse stuId for convert to num.
            });
    }, []);

    const { image, student_name, location, age } = singleStu;

    return (
        <div className='border text-center py-12 mt-8 border-gray-500 rounded mx-auto w-1/4'>
            <div className='w-full'>
                <img className='h-48 w-48 mx-auto rounded-full' src={image} alt="" />
            </div>
            <h3 className='text-2xl font-bold my-3'>Name: {student_name}</h3>
            <p>Age: {age}</p>
            {/* <p className='font-bold mb-3'>Address: {location.city_name}, {location.country_name}</p>
            // send obj to another compo and try to display data;
            */}
        </div>
    );
};

export default Profile;