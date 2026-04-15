import Image from 'next/image';
import React from 'react';
import { MdNotificationsPaused, MdOutlineNotificationsPaused } from 'react-icons/md';
import { RiArchiveLine, RiDeleteBinLine } from 'react-icons/ri';

const FriendDetails = async ({ params }) => {

    const { friendId } = await params;


    const res = await fetch('http://localhost:3000/friends.json', {
        cache: 'no-store'
    });
    const AllFriendsData = await res.json();

    // console.log(AllFriendsData)

    const FriendsDetails = AllFriendsData.find(details => details.id == friendId);

    console.log(FriendsDetails)



    return (
        <div className='grid grid-cols-3 w-[85%] mx-auto my-10'>


            <div className='col-span-1 border p-2'>

                <div className='shadow rounded-xl space-y-3 py-6 px-4'>


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
                    <button className='flex gap-4 items-center'><MdOutlineNotificationsPaused />

                        Snooze 2 weeks</button>

                </div>
                <div className='shadow rounded-xl my-2 p-4 flex justify-center'>
                    <button className='flex gap-4 items-center'><RiArchiveLine />
                        Archive</button>

                </div>
                <div className='shadow rounded-xl my-2 p-4 flex justify-center'>
                    <button className='flex gap-4 items-center text-red-500'> <RiDeleteBinLine />


                        Delete</button>

                </div>

            </div>





            {/* 2nd part */}

            <div className='col-span-2 border p-10'>
                <h1>Eta ela ki </h1>

            </div>
        </div>
    );
};

export default FriendDetails;