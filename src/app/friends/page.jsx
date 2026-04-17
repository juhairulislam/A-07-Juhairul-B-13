import FriendsCards from '@/Components/FriendsCards/FriendsCards';
import Image from 'next/image';
import React from 'react';



const AllFriends = async () => {

    const res = await fetch('https://a-07-juhairul-b-13-f5xy.vercel.app/friends.json');
    const friends = await res.json();

    // console.log(friends)
    return (
        <div className='mt-8 w-[80%] mx-auto'>

            <h1 className='font-bold text-xl'>Your Friends</h1>


         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
               {
                friends.map((friend) => <FriendsCards key={friend.id} friend={friend}></FriendsCards>)
            }
         </div>


           

        </div>
    );
};

export default AllFriends;