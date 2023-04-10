import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => // isActive = to route and url route is same then execute ? or execute :
                isActive
                    ? "underline underline-offset-8 text-white"
                    : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;