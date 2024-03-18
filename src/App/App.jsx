import './App.css'
import Profile from "../components/Profil/Profile.jsx";
import userData from "../Data/UserData.json";
import FriendList from "../components/FriendList/FriendList.jsx";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory.jsx";
import transactionHistory from "../Data/TransactionHistory.json";
import friends from "../Data/Friends.json";
function App() {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                img={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactionHistory} />
        </>
    )
}

export default App
