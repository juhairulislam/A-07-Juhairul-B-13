import Image from 'next/image';
import React from 'react';

const FriendsCard = ({ friend }) => {
    console.log(friend)

    return (
        <div className='shadow rounded-xl'>

                    <div className='flex justify-center items-center'>
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={50}
                            height={50}
                            className='rounded-full'
                        />
                    </div>


                    <div>
                        <h2 className='font-bold'>{friend.name}</h2>
                        <p className='text-[#64748B] text-[13px]'>{`${friend.days_since_contact}d ago`}</p>
                    </div>

               <div className='flex gap-2'>
                   {
                    friend.tags?.map((tag,ind) => <div key={ind}>

                        <p className='font-bold text-green-500 rounded-xl border border-green-500'>{tag}</p>

                    </div>)
                  }
               </div>


                    <div>
                        <p className=''>{friend.status}</p>
                    </div>

           



        </div>
    );
};

export default FriendsCard;