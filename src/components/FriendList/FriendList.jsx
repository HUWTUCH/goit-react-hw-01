import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import friendListStyle from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={friendListStyle.listFriends}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}
export default FriendList;