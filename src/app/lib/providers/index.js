'use client'
import ManageData from '@/Context/Context';
import React from 'react';

const Providers = ({children}) => {
    return (

        <ManageData>
            {children}
        </ManageData>
     
    );
};

export default Providers;