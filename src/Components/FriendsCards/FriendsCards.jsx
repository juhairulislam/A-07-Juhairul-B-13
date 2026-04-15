import Image from 'next/image';
import React from 'react';

const FriendsCard = ({ friend }) => {
    console.log(friend)

    return (
        <div className='shadow rounded-xl py-8'>

                    <div className='flex justify-center items-center'>
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={50}
                            height={50}
                            className='rounded-full'
                        />
                    </div>


                    <div className='text-center my-3'>
                        <h2 className='font-bold'>{friend.name}</h2>
                        <p className='text-[#64748B] text-[13px]'>{`${friend.days_since_contact}d ago`}</p>
                    </div>

               <div className='flex gap-2 justify-center'>
                   {
                    friend.tags?.map((tag,ind) => <div key={ind}>

                        <p className='text-[8px] lg:text-[10px] rounded-xl px-2 lg:py-1 bg-[#CBFADB] text-[#244D3F] border border-green-500'>{tag.toUpperCase()}</p>

                    </div>)
                  }
               </div>


                    <div className='flex justify-center'>
                        <p className={`text-[13px] mt-4 text-center text-white rounded-xl w-20  ${friend.status === 'Almost Due' ? 'bg-[#EFAD44]': friend.status=== 'On-Track'?'bg-[#244D3F]': friend.status === 'Overdue'?'bg-[#EF4444]':''}`}>{friend.status}</p>
                    </div>

           



        </div>
    );
};

export default FriendsCard;