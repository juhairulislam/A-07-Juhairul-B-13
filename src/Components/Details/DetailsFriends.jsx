'use client'
import { HandleData } from '@/Context/Context';
import Image from 'next/image';
import React, { useContext } from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCamera } from 'react-icons/pi';
import { RiArchiveLine, RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

const DetailsFriends = ({ FriendsDetails }) => {


    const { data, setData } = useContext(HandleData);


    const storeData = (timelineDetails, category) => {
        toast.success(`${category} With ${timelineDetails.name}`) ;

        setData((prev) => [
            { ...timelineDetails, type: category, timestamp: new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}) },
            ...prev
        ]);
    }

    // console.log(data)



    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 w-[85%] mx-auto my-10 gap-4'>


            <div className='col-span-1 p-4'>

                <div className='shadow rounded-xl space-y-3 py-2 px-4'>


                    <div className='flex justify-center items-center'>
                        <Image
                            src={FriendsDetails.picture}
                            alt={FriendsDetails.name}
                            width={50}
                            height={50}
                            className='rounded-full'
                        />
                    </div>

                    <div className='text-center'>
                        <h2 className='font-bold text-xl'>{FriendsDetails.name}</h2>
                    </div>


                    <div className='flex justify-center'>
                        <p className={`text-[13px] text-center text-white rounded-xl w-20  ${FriendsDetails.status === 'Almost Due' ? 'bg-[#EFAD44]' : FriendsDetails.status === 'On-Track' ? 'bg-[#244D3F]' : FriendsDetails.status === 'Overdue' ? 'bg-[#EF4444]' : ''}`}>{FriendsDetails.status}</p>
                    </div>

                    <div className='flex gap-2 justify-center'>
                        {
                            FriendsDetails.tags?.map((tag, ind) => <div key={ind}>

                                <p className='text-[8px] lg:text-[10px] rounded-xl px-2 bg-[#CBFADB] text-[#244D3F] border border-green-500'>{tag.toUpperCase()}</p>

                            </div>)
                        }
                    </div>

                    <div>
                        <p className='italic text-[#64748B] text-center'>{`"${FriendsDetails.bio}"`}</p>
                    </div>

                    <p className='text-[#64748B] text-center text-[13px]'>Preferred: {FriendsDetails.email}</p>

                </div>


                <div className='shadow rounded-xl my-2 p-4 flex justify-center'>
                    <button className='flex gap-2 items-center'><RiNotificationSnoozeLine />


                        Snooze 2 weeks</button>

                </div>
                <div className='shadow rounded-xl my-2 p-4 flex justify-center'>
                    <button className='flex gap-2 items-center'><RiArchiveLine />
                        Archive</button>

                </div>
                <div className='shadow rounded-xl my-2 p-4 flex justify-center'>
                    <button className='flex gap-2 items-center text-red-500'> <RiDeleteBinLine />


                        Delete</button>

                </div>

            </div>





            {/* 2nd part */}

            <div className='col-span-2 p-4'>


                <div className='grid grid-cols-2  md:grid-cols-3 gap-6 text-center'>
                    <div className='shadow rounded-xl p-8'>
                        <p className='text-[#244D3F] text-xl lg:text-2xl font-semibold'>{FriendsDetails.days_since_contact}</p>
                        <p className='text-[#64748B] text-[13px]'>Days Since Contact</p>

                    </div>
                    <div className='shadow rounded-xl p-8'>
                        <p className='text-[#244D3F] text-xl lg:text-2xl font-semibold'>{FriendsDetails.goal}</p>
                        <p className='text-[#64748B] text-[13px]'>Goal (Days)</p>

                    </div>
                    <div className='shadow rounded-xl p-8'>
                        <p className='text-[#244D3F] text-xl lg:text-2xl font-semibold'>{FriendsDetails.next_due_date}</p>
                        <p className='text-[#64748B] text-[13px]'>Next Due</p>

                    </div>

                </div>


                <div className='shadow rounded-xl  p-6 my-4'>
                    <div className='flex justify-between '>
                        <p className='text-[#244D3F] text-[18px]'>Relationship Goal</p>
                        <button className='btn'>Edit</button>
                    </div>

                    <p className='text-[#64748B] text-[14px]'>Connect every <span className='font-semibold text-black'> 30 days </span></p>
                </div>


                <div className='shadow rounded-xl p-6 lg:p-10'>
                    <p className='text-xl font-semibold'>Quick Check-In</p>

                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                            <button onClick={() => storeData(FriendsDetails, 'Call')} className='btn py-6 text-2xl'><LuPhoneCall /></button>
                            <button onClick={() => storeData(FriendsDetails, 'Text')} className='btn py-6  text-2xl'><MdOutlineTextsms />
                            </button>
                            <button onClick={() => storeData(FriendsDetails, 'Video')} className='btn py-6  text-2xl'><PiVideoCamera />
                            </button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default DetailsFriends;