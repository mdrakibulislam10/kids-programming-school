import React from 'react';
import Header from '../../../components/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Root = () => {

    const navigation = useNavigation();
    console.log(navigation.state);

    return (
        <div>
            <Header />
            <div className='text-center'>
                {
                    navigation.state === "loading" ? "loading..." : ""
                }
            </div>
            <Outlet />
        </div>
    );
};

export default Root;