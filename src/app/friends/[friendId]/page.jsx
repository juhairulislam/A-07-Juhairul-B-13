import DetailsFriends from '@/Components/Details/DetailsFriends';


const FriendDetails = async ({ params }) => {


    const { friendId } = await params;


    const res = await fetch('http://localhost:3000/friends.json', {
        cache: 'no-store'
    });
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