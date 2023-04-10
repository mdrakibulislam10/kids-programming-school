import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        // <section className='bg-pink-500 p-6 flex justify-between text-white items-center'>
        <section className='grid grid-cols-1 lg:grid-cols-3 items-center bg-pink-500 p-6 text-white'>
            <h2 className='font-bold md:text-2xl lg:me-auto text-center'>KIDS PROGRAMMING <br /> SCHOOL</h2>
            <nav className='flex justify-center my-4 gap-3 md:gap-6 lg:gap-9 flex-wrap text-yellow-400'>
                <ActiveLink to={"/"}>Home</ActiveLink>
                <ActiveLink to={"/events"}>Events</ActiveLink>
                <ActiveLink to={"/students"}>Students</ActiveLink>
                <ActiveLink to={"/profile"}>Profile</ActiveLink>
            </nav>
            <div className='lg:ms-auto'>
                <button className='mr-4 font-bold'>Login</button>
                <button>Log Out</button>
            </div>
        </section>
    );
};

export default Header;