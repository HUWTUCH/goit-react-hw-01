const FriendList = (friend) => {
    const statusClass = friend.isOnline ? 'online' : 'offline'
    return (
        <div>
            <img src={friend.img} alt="Avatar" width="48" className="img-fried"/>
            <p className='name-friend'>{friend.name}</p>
            <p className={`isOnline-friend ${statusClass}`}>{friend.isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}
export default FriendList;