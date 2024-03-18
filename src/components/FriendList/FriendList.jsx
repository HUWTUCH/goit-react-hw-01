import friends from "../../Data/Friends.json";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import friendListStyle from "./FriendList.module.css";
const friendList = () => {
    return (
        <ul className={friendListStyle.listFriends}>
            {friends.map(friend => {
                return (
                    <li key={friend.id} >
                        <FriendListItem
                            img={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
export default friendList;