import friendListItemStyle from "./FriendListItem.module.css"
const FriendListItem = (friend) => {
    return (
        <div>
            <img src={friend.avatar} alt="Avatar" width="48"/>
            <p >{friend.name}</p>
            <p className={friend.isOnline ? friendListItemStyle.online : friendListItemStyle.offline}>{friend.isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}
export default FriendListItem;