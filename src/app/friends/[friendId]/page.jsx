import DetailsFriends from '@/Components/Details/DetailsFriends';


const FriendDetails = async ({ params }) => {


    const { friendId } = await params;


    const res = await fetch('https://a-07-juhairul-b-13-f5xy.vercel.app/friends.json');
    const AllFriendsData = await res.json();

    // console.log(AllFriendsData)

    const FriendsDetails = AllFriendsData.find(details => details.id == friendId);

    // console.log(FriendsDetails)



    return (

        <div>
            <DetailsFriends FriendsDetails={FriendsDetails}></DetailsFriends>
        </div>
       
    );
};

export default FriendDetails;