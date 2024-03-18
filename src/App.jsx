import './App.css'
import Profil from "./components/Profil/profil.jsx";
import userData from "./components/Profil/userData.json";
import FriendList from "./components/friendList/friendList.jsx";
import friends from "./components/friendList/friends.json"
function App() {
    return (
        <>
          <Profil
              name={userData.username}
              tag={userData.tag}
              location={userData.location}
              img={userData.avatar}
              stats={userData.stats}
          />
            <ul className="listFriends">
                {friends.map(friend => {
                    return (
                        <li key={friend.id} className="itemFriend">
                            <FriendList
                                img={friend.avatar}
                                name={friend.name}
                                isOnline={friend.isOnline}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default App
