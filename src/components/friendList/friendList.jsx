import friends from "../../data/friends.json";
import FriendListItem from "../friendListItem/friendListItem.jsx";
import friendListStyle from "./friendList.module.css";
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