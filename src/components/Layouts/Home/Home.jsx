import React from 'react';
import Banner from '../../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Subject from '../../Subject/Subject';

const Home = () => {
    const subjects = useLoaderData();
    // console.log(subjects);

    return (
        <section>
            <Banner />

            <div className='grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center my-12'>

                {
                    subjects.map(subject =>
                        <Subject
                            subject={subject}
                            key={subject.id}
                        />
                    )
                }
            </div>
        </section>
    );
};

export default Home;