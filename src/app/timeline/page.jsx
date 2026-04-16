'use client'
import { HandleData } from '@/Context/Context';
import React, { useContext } from 'react';
import callPhoto from '../../../public/assets/call.png'
import textPhoto from '../../../public/assets/text.png'
import videoPhoto from '../../../public/assets/video.png'
import Image from 'next/image';

const Timeline = () => {

    const { data, setData } = useContext(HandleData);

    console.log(data)

    return (
        <div className='w-[85%] mx-auto my-10'>

            <div>
                <h1 className='font-bold text-3xl my-6'>Timeline</h1>

                <div>

                    {
                        data.map((history, ind) => <div className='shadow rounded-xl my-6 p-2' key={ind}>


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