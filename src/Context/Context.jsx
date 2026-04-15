'use client'
import React, { createContext, useState } from 'react';

export const HandleData = createContext() ;

const ManageData = ({children}) => {

    const [data , setData] = useState([]) ;

    return (

        <div>
            <HandleData.Provider value={{data, setData}}>

                {children}


            </HandleData.Provider>
            
        </div>
    );
};

export default ManageData;