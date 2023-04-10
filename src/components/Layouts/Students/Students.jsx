import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Student from '../../Student/Student';

const Students = () => {
    const students = useLoaderData();
    // console.log(students);

    return (
        <section className='grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center my-12 mx-2'>
            {
                students.map(student =>
                    <Student
                        student={student}
                        key={student.id}
                    />
                )
            }
        </section>
    );
};

export default Students;