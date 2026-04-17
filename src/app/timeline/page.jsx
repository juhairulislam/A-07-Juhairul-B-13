'use client'

import { HandleData } from '@/Context/Context';
import React, { useContext, useState } from 'react';
import callPhoto from '../../../public/assets/call.png'
import textPhoto from '../../../public/assets/text.png'
import videoPhoto from '../../../public/assets/video.png'
import Image from 'next/image';

const Timeline = () => {


    const { data} = useContext(HandleData);


    const [filterType , setFilterType] = useState('Filter timeline') ;

    const displayData = (filterType === 'Filter timeline' || filterType === 'All')? data : data.filter(item => item.type === filterType);


    const handleSort = (e) => {
        setFilterType(e.target.value);
    };
  






    // console.log(data)

    return (
        <div className='w-[85%] mx-auto my-10'>

            <div>
                <h1 className='font-bold text-3xl my-6'>Timeline</h1>

                <div>
                    <select defaultValue="Filter timeline" onChange={handleSort} className="select">
                        <option disabled={true}>Filter timeline</option>
                        <option value="All">All</option>
                        <option value="Call" >Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>

                <div>

                    {
                        displayData.map((history, ind) => <div className='shadow rounded-xl my-6 p-2' key={ind}>


                            <div className='flex gap-4'>

                                <Image
                                    src={history.type === 'Call' ? callPhoto : history.type === 'Text' ? textPhoto : videoPhoto}
                                    alt={`${history.type} Icon`}
                                    width={50}
                                    height={50}
                                    className='p-2'
                                />


                                <div>
                                    <p className='text-[#244D3F] font-sans font-semibold'>{`${history.type}`} <span className='text-[#64748B] text-[12px]'>{`With ${history.name}`}</span></p>
                                    <p className='text-[#64748B] text-[14px]'>{`${history.timestamp}`}</p>
                                </div>
                            </div>





                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;