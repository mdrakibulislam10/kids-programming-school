import React from 'react';
import banner from "../../../public/images/headerImg/banner.jpg";

const Banner = () => {
    return (
        <div>
            <img className='w-full' src={banner} alt="" />
        </div>
    );
};

export default Banner;